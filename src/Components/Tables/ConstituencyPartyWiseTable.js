import * as React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExportExcel from './excelexport'
import { Button } from '@mui/material';

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
    <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Party-wise Election Report - Rodriguez {data[0].ResultYear}</Text>
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
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.Party}</Text>
          <Text style={styles.tableCell}>{item['Name of the Person']}</Text>
          <Text style={styles.tableCell}>{item['Votes Scored']}</Text>
          <Text style={styles.tableCell}>{item['Percentage']}%</Text>
          <Text style={styles.tableCell}>{item.Community}</Text>
          <Text style={styles.tableCell}>{item.Position}</Text>
          <Text style={styles.tableCell}>{item['Margin']}%</Text>
          <Text style={styles.tableCell}>{item.BestLoser ? 'Yes' : 'No'}</Text>
        </View>
      ))}
    </View>
  </Page>
</Document>
);

export default function BasicTable({data, filename}) {
  const [pdfVisible, setPdfVisible] = React.useState(false);

  const togglePdfView = () => {
    setPdfVisible(!pdfVisible);
  };

  const constructFilename = () => {
    return `${filename.ConstituencyName}_${filename.year}`;
  };
  console.log(data)
  return (
    <div>
      <TableContainer component={Paper}>
      
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: 'black', color: 'white' }}>
            <TableRow>
            <TableCell align="center" sx={{ color: 'white' }}>Const. No</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Party Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Candidate Name</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Total Votes</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Percentage</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Community</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Position</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Margin</TableCell>
              <TableCell align="center" sx={{ color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell align="center">{row['Constituency No']}</TableCell>
                <TableCell align="center">{row['Alliance']}</TableCell>
                <TableCell align="center">{row['Name of the Person']}</TableCell>
                <TableCell align="center">{row['Votes Scored']}</TableCell>
                <TableCell align="center">{row['%']}%</TableCell>
                <TableCell align="center">{row['Community']}</TableCell>
                <TableCell align="center">{row['Position']}</TableCell>
                <TableCell align="center">%</TableCell>
                <TableCell align="center">{row['Status']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </TableContainer>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <button style={{ borderRadius: '8px', backgroundColor: 'black', color: 'white' }} onClick={togglePdfView}>Download</button>
      </div>
      {pdfVisible && (
        <div style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' , gap:'1rem'}} >
         <Button variant="contained">
          <PDFDownloadLink style={{color:'white', textDecoration:'none'}} document={<PDFReport data={data} />} fileName="election_report.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download as PDF'
            }
          </PDFDownloadLink>
          </Button>
          <ExportExcel excelData={data} fileName={filename} />
        </div>
      )}
      
    </div>
  );
}
