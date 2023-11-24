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

export default function BasicTable({ data }) {
  // Get the keys for the columns
  const columns = ['Constituency No', 'Alliance', 'Name of the Person', 'Position', 'Votes Scored', 'Status', '%'];

  // Sort the data by "Constituency No"
  const sortedData = [...data].sort((a, b) => a['Constituency No'] - b['Constituency No']);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', maxHeight: '100vh', overflowY: 'auto' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'black', color: 'white', position: 'sticky', top: 0, zIndex: 1 }}>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align="center" sx={{ color: 'white' }}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.length ? (
            sortedData.map((constituency, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {/* Display constituency information in the first row */}
                <TableRow>
                  {columns.map((column, columnIndex) => (
                    <TableCell sx={{backgroundColor:'lightgrey'}} key={columnIndex} align="center">{constituency[column]}</TableCell>
                  ))}
                </TableRow>
                {/* Display sub-rows for each candidate within the constituency */}
                {constituency.candidates.map((candidate, candidateIndex) => (
                  <TableRow key={candidateIndex}>
                    <TableCell align="center"></TableCell> {/* Empty cell for Constituency No. */}
                    <TableCell align="center">{candidate.Alliance}</TableCell>
                    <TableCell align="center">{candidate['Name of the Person']}</TableCell>
                    <TableCell align="center">{candidate.Position}</TableCell>
                    <TableCell align="center">{candidate['Votes Scored']}</TableCell>
                    <TableCell align="center">{candidate.Status}</TableCell>
                    <TableCell align="center">{candidate['%']}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" colSpan={columns.length}>Loading data...</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="center" sx={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }} colSpan={columns.length}><Link style={{ color: 'white' }} className='link-tab' to=''>View All Details</Link></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
