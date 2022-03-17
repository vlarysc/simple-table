import React, { useContext, useEffect, useState, useRef } from 'react';
import { EmployeesContext } from '../../contexts/state.js';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputBase,
  Divider,
  IconButton,
  TableFooter,
  TablePagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Notify from '../../utils/Notify.js';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EmployeesTable from './EmployeesTable.css';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const TabelClientes = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { employees, setEmployees } = useContext(EmployeesContext);
  const [copied, setCopied] = useState(false);
  let [rows, setRows] = useState(employees);
  let [inputValue, setInputValue] = useState('');

  let employeesFiltred = [];

  function handleInput(e) {
    setInputValue(e.target.value.toLowerCase());
  }

  function pesquisar(e) {
    e.preventDefault();
  }
  
  useEffect(() => {
    employeesFiltred = employees.filter(function (el) {
      return (
        el.name.toLowerCase() === inputValue ||
        el.name.toLowerCase().includes(inputValue)
      );
    });

    inputValue == '' || employeesFiltred == [] ? setRows(employees) : setRows(employeesFiltred);

  }, [inputValue]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  return (
    <div>
      <Paper
        onSubmit={pesquisar}
        className="teste"
        component="form"
        sx={{
          p: '2px 4px',
          m: '20px 15%',
          display: 'flex',
          alignItems: 'center',
          width: 600,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Consultor"
          onChange={handleInput}
          inputProps={{ 'aria-label': 'Consultor' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper} elevation={6}>
        <Table sx={{ width: 900, minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Departamento</TableCell>
              <TableCell align="center">coordinatorId</TableCell>
              <TableCell align="center">reportsToEmployeeId</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
              <CopyToClipboard
                onCopy={() => setCopied(true)}
                text={row.id}
                key={row.id}
              >
                <TableRow
                  onClick={() => {
                    setCopied(true);
                    Notify('success', 'ID Copiado com sucesso!');
                  }}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.departament}</TableCell>
                  <TableCell align="center">{row.coordinatorId}</TableCell>
                  <TableCell align="center">
                    {row.reportsToEmployeeId}
                  </TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              </CopyToClipboard>
            ))}
             {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TabelClientes;
