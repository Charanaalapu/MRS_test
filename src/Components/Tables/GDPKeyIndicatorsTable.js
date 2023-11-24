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

// ... (createData function)

function createData(year, budgetBalance, accountBalance, accountBalanceGDP, reserves, inflationRate, overallBalance, GDPGrowthRate, unemploymentRate) {
    return { year, budgetBalance, accountBalance, accountBalanceGDP, reserves, inflationRate, overallBalance, GDPGrowthRate, unemploymentRate };
  }

const rows = [
  createData('2005', '-4.6', '-9,570', '-5', '41,884', '4.9', '-4,888', '2.7', '9.6'),
  createData('2006', '-4.8', '-19,399', '-8.7', '44,670', '8.9', '-4,573', '5.6', '9'),
  createData('2007', '-4', '-13,248', '-5.2', '51,386', '8.8', '13,880', '5.6', '8.5'),
  createData('2008', '-2.6', '-27,633', '-9.7', '56,535', '9.7', '4,624', '5.3', '7.2'),
  createData('2009', '-3', '-20,836', '-7.1', '69,742', '2.5', '12,103', '3.4', '7.3'),
  createData('2010', '-3.2', '-30,985', '-10.1', '79,044', '2.9', '6,177', '4.5', '7.6'),
  createData('2011', '-3.2', '-44,630', '-13.5', '81,474', '6.5', '5,247', '3.9', '7.8'),
  createData('2012', '-1.8', '-25,056', '-7.1', '92,988', '3.9', '6,041', '3.6', '8'),
  createData('2013', '-3.5', '-23,122', '-6.1', '105,009', '3.5', '16,580', '3.4', '8'),
  createData('2014', '-3.2', '-21,237', '-5.3', '124,344', '3.2', '23,019', '3.7', '7.8'),
  createData('2015', '-3.5', '-14,723', '-3.5', '152,902', '1.3', '19,960', '3.2', '7.9'),
  createData('2016', '-3.5', '-17,448', '-3.9', '178,858', '1', '26,227', '3.6', '7.3'),
  createData('2017', '-2.9', '-21,059', '-4.5', '200,368', '3.7', '28,315', '3.7', '7.1'),
  createData('2018', '-3.2', '-18,995', '-3.8', '217,585', '3.2', '16,618', '3.9', '6.9'),
  createData('2019', '-13.6', '-25,650', '-5', '269,494', '0.5', '32,834', '3', '6.7'),
  createData('2020', '-5.6', '-39,694', '-8.8', '288,240', '2.5', '-21,058', '-14.4', '9.2'),
  createData('2021', '-5', '-63,669', '-13.3', '372,697', '4', '55,200', '4.4', '9.1'),
];



export default function BasicTable({ partyType, data }) {
  let nav = "dashboard-alliance";
  if (partyType === "Alliance") {
    nav = "dashboard-alliance";
  } else {
    nav = "party-wise-dashboard";
  }

  
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', maxHeight: '250px' }}>
      <Table sx={{ minWidth: 300, height: 100, overflowX: 'scroll' }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'black', color: 'white' }}>
          <TableRow>
            <TableCell align="center" sx={{ color: 'white' }}>Year</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Budget Balance as a % of GDP*</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Current Account Balance (Rs million)</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Current Account Balance as a % of GDP</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Gross Official International Reserves (Rs million)</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Headline Inflation Rate</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Overall Balance of Payments (Rs million)</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Real GDP Growth Rate</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Unemployment Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id} // Assuming you have a unique identifier in your data
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.values(row).map((value, index) => (
                <TableCell key={index} align="center">{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }} colSpan={9} ><Link style={{ color: 'white' }} className='link-tab' to={`/${nav}`}>View All Details</Link></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
