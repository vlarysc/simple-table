import React, {useState, createContext} from 'react'

export const EmployeesContext = createContext();


const EmployeesProvider = ({children}) => {
const [employees, setEmployees] = useState([
    {
			id: 101,
			name: "Manoel Neto",
			email: "manoel.neto@credihome.com.br",			
			status: "active",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 202,
			name: "Diego Fernandes",
			email: "manoel.neto@credihome.com.br",			
			status: "active",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 303,
			name: "Ramiro Alves",
			email: "manoel.neto@credihome.com.br",			
			status: "active",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 404,
			name: "Lucas Mota",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 504,
			name: "Vinicius Abreu",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 604,
			name: "Alex Ramos",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 704,
			name: "Everton Moraes",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 804,
			name: "Denilson Silveira",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 904,
			name: "Heab Hamony",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 1004,
			name: "Lucas Virgilio",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 1104,
			name: "Dennis Mota",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 1204,
			name: "Vitor Haphman",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 1304,
			name: "Franscisco Machado",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    
    {
			id: 1404,
			name: "Victor Hugo",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
    {
			id: 1504,
			name: "Cacio Borga ",
			email: "manoel.neto@credihome.com.br",			
			status: "inactive",
			departament: "commercial",			
			coordinatorId: 111,		
			reportsToEmployeeId: 23,
		},
  ]);

  return (
      <EmployeesContext.Provider value={{employees, setEmployees}}>
          {children}
      </EmployeesContext.Provider>
  )
}


export default EmployeesProvider;