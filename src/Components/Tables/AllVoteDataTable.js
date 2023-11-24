import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from '@mui/material';
import { Link } from 'react-router-dom';

const createData = (name, constituencyNo, electors, votes, validVotesPercentage, voterTurnoutPercentage) => {
  return { name, constituencyNo, electors, votes, validVotesPercentage, voterTurnoutPercentage };
};

const BasicTable = ({ data }) => {
  // console.log(data);

  const rows = data.map((constituency) =>
    createData(
      constituency['Constituency Name'],
      constituency['Constituency No'],
      constituency['Electors'],
      constituency['Voters'],
      constituency['Valid votes (% of total votes)'],
      constituency['Voter turnout(%)']
    )
  );

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', height: '70vh', overflowY: 'auto' }}>
      <Table sx={{ minWidth: 300, height: '100%', overflowX: 'scroll' }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'black', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
          <TableRow>
            <TableCell align="center" sx={{ color: 'white' }}>Constituency Name</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Constituency No</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Electors</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Valid Votes %</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Voter Turnout %</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row['name']}</TableCell>
              <TableCell align="center">{row['constituencyNo']}</TableCell>
              <TableCell align="center">{row['electors']}</TableCell>
              <TableCell align="center">{row['votes']}</TableCell>
              <TableCell align="center">{row['validVotesPercentage']}%</TableCell>
              <TableCell align="center">{row['voterTurnoutPercentage']}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }} colSpan={6} >
              <Link style={{ color: 'white' }} className='link-tab' to=''>
                View All Details
              </Link>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
