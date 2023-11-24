import * as React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  {
    constno:[1],
    party_name: 'Party A',
    candidate_name: ['Candidate 1shdsdg11111111111111111111111111', 'Candidate 21111111111111111111111111'],
    community: 'Community 1',
    vote_scored: [1000],
    position: [1, 2],
    turnout:[20],
    margin:[12],
    percentage:[13],
    best_loser: [false, true],
  },
  {
    constno:1,
    party_name: 'Party B',
    candidate_name: ['Candidate 1', 'Candidate 2'],
    community: 'Community 22',
    vote_scored: [80, 600], // Updated to an array of numbers
    position: [2, 3], // Updated to an array of numbers
    turnout:20,
    margin:12,
    percentage:13,
    best_loser: [true, false], // Updated to an array of booleans
  },
  // Add similar entries for other parties
];

// Define PDF styles
const styles = StyleSheet.create({

  fontStyle:{
    fontFamily:'Roboto',
  },

  page: {
    flexDirection: 'column',
    margin: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRight: 0,
    borderBottom: 0,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1,
  },
  tableCell: {
    padding: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  headerCell: {
    backgroundColor: '#f0f0f0',
    color: '#000',
    fontWeight: 'bold',
  },
});

// Define PDFReport component
const PDFReport = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Party-wise Election Report - Rodriguez 2019</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.headerCell]}>
          <Text style={[styles.tableCell, styles.headerCell]}>Party Name</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Candidate Name</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Community</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Vote Scored</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Position</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Best Loser</Text>
        </View>
        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.party_name}</Text>
            <Text style={styles.tableCell}>{row.candidate_name}</Text>
            <Text style={styles.tableCell}>{row.community}</Text>
            <Text style={styles.tableCell}>{row.vote_scored}</Text>
            <Text style={styles.tableCell}>{row.position}</Text>
            <Text style={styles.tableCell}>{row.best_loser ? 'Yes' : 'No'}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default function BasicTable() {
  const [pdfVisible, setPdfVisible] = React.useState(false);

  const togglePdfView = () => {
    setPdfVisible(!pdfVisible);
  };
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'black', color: 'white' }}>
          <TableRow>
          {/* <TableCell align="center" sx={{ color: 'white' }}>Const No.</TableCell> */}
            <TableCell align="center" sx={{ color: 'white' }}>Party Name</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Candidate Name</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Community</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Vote Scored</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Position</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes Turnout</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes Margin</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Votes %</TableCell>
            <TableCell align="center" sx={{ color: 'white' }}>Best Loser</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            
            <TableRow key={rowIndex}>
              {/* <TableCell align="center">{row.constno}</TableCell> */}
              <TableCell align="center">{row.party_name}</TableCell>
              <TableCell align="center">{row.turnout}%</TableCell>
              <TableCell align="center">
                {row.candidate_name.map((candidate, index) => (
                  <div key={index}>
                    {candidate}
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">{row.community}</TableCell>
              <TableCell align="center">
                {row.vote_scored.map((score, index) => (
                  <div key={index}>
                    {score}
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                {row.position.map((pos, index) => (
                  <div key={index}>
                    {pos}
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                {row.position.map((turnout, index) => (
                  <div key={index}>
                    {turnout}%
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                {row.position.map((margin, index) => (
                  <div key={index}>
                    {margin}%
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                {row.position.map((percentage, index) => (
                  <div key={index}>
                    {percentage}%
                  </div>
                ))}
              </TableCell>
              <TableCell align="center">
                {row.best_loser.map((loser, index) => (
                  <div key={index}>
                    {loser ? 'Yes' : 'No'}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button style={{borderRadius:'8px', backgroundColor:'black', color:'white'}} onClick={togglePdfView}>Generate PDF</button>
      </div>
      {pdfVisible && (
        <div style={{borderRadius:'8px',display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem'}} >
        <PDFDownloadLink  document={<PDFReport data={rows} />} fileName="election_report.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
