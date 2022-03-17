import EmployeesProvider from './contexts/state.js'
import EmployeesTable from './components/EmployeesTable/EmployeesTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <EmployeesProvider>

        <EmployeesTable />
      </EmployeesProvider>
    </div>
  );
}

export default App;
