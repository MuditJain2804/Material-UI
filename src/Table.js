import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {DataGrid} from '@mui/x-data-grid';

function createData(name, calories, fat, carbs, protein){
    return{name, calories, fat, carbs, protein};
}

const rows=[
    createData('Frozen Yogurt', 159, 6.0, 24, 4.0),
    createData('Ice cream Sandwich', 237, 9.9,37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function BasicTable(){
    return(
        <TableContainer component={Paper}>
            <Table sx={{minWidth:650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat &nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs &nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein &nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow 
                            key={row.name}
                            sx={{'&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell component="th" scope='row'>{row.name}</TableCell>
                            <TableCell align='right'>{row.calories}</TableCell>
                            <TableCell align='right'>{row.fat}</TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90,},
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const row = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  export function DataTable(){
    return(
        <div style={{height:400, width:'50%'}}>
        <DataGrid
            rows={row}
            columns={columns}
            initialState={{
                pagination:{
                    paginationModel:{page:0,pageSize:5},
                },
            }}
            pageSizeOptions={[5,10]}
            checkboxSelection
        />
    </div>
    )
  }