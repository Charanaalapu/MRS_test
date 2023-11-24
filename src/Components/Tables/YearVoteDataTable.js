import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';
import { Link } from 'react-router-dom';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function createData(name, calories, fat) {
  return { name, calories, fat};
}

const goToBottom = ()=>{
  alert("Working")
}

const rows = [
  createData('BJP', 159, "42%"),
  createData('BJP', 159, "42%"),
  createData('BJP', 159, "42%"),
];

// ... (imports)

export default function BasicTable({data}) {
 

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', maxHeight:'250px' }}>
      <Table sx={{ minWidth: 300, height: 100, overflowX:'scroll' }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'black', color: 'white' }}>
          <TableRow>
            <TableCell align="center" sx={{ color: 'white' }}>Alliance/Party</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes %</TableCell>
          </TableRow>
        </TableHead >
        <TableBody>
          {data ? (
            data.map((row) => (
              <TableRow
                key={row.id} // Assuming you have a unique identifier in your data
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{row['Alliance']}</TableCell>
                <TableCell align="center">{row['totel_votes']}</TableCell>
                <TableCell align="center">{row['vote %']}%</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={3}>Loading data...</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }} colSpan={3} ><Link style={{ color: 'white' }} className='link-tab' to=''>View All Details</Link></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

