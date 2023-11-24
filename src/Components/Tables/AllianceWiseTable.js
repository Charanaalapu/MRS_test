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
    alliance_name: 'Party A',
    candidate_name: 'ABC',
    total_votes: 4067,
    percentage: 13,
    community: 'Community 1',
    position: 1,
    margin: 12,
    best_loser: false,
  },
  {
    party_name: 'Party B',
    candidate_name: 'XYZ',
    total_votes: 7800,
    percentage: 38,
    community: 'Community 2',
    position: 2,
    margin: 12,
    best_loser: true,
  },
  // Add similar entries for other parties
];

const styles = StyleSheet.create({
  fontStyle: {
    fontFamily: 'Roboto',
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

const PDFReport = ({ data }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Party-wise Election Report - Rodriguez 2019</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.headerCell]}>
            <Text style={[styles.tableCell, styles.headerCell]}>Party Name</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Candidate Name</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Total Votes</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Percentage</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Community</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Position</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Margin</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Best Loser</Text>
          </View>
          {data.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{row.alliance_name}</Text>
              <Text style={styles.tableCell}>{row.candidate_name}</Text>
              <Text style={styles.tableCell}>{row.total_votes}</Text>
              <Text style={styles.tableCell}>{row.percentage}%</Text>
              <Text style={styles.tableCell}>{row.community}</Text>
              <Text style={styles.tableCell}>{row.position}</Text>
              <Text style={styles.tableCell}>{row.margin}%</Text>
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
              <TableCell align="center" sx={{ color: 'white' }}>Alliance Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Candidate Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Total Votes</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Percentage</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Community</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Position</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Margin</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Best Loser</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell align="center">{row.alliance_name}</TableCell>
                <TableCell align="center">{row.candidate_name}</TableCell>
                <TableCell align="center">{row.total_votes}</TableCell>
                <TableCell align="center">{row.percentage}%</TableCell>
                <TableCell align="center">{row.community}</TableCell>
                <TableCell align="center">{row.position}</TableCell>
                <TableCell align="center">{row.margin}%</TableCell>
                <TableCell align="center">{row.best_loser ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button style={{ borderRadius: '8px', backgroundColor: 'black', color: 'white' }} onClick={togglePdfView}>Generate PDF</button>
      </div>
      {pdfVisible && (
        <div style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} >
          <PDFDownloadLink document={<PDFReport data={rows} />} fileName="election_report.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
}
