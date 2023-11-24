import React from "react";
import Button from '@mui/material/Button';
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import {Tooltip} from '@mui/material';


const ExportExcel = ({excelData, fileName})=>{
    const fileType = 'application/ViewAgenda.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
  console.log(fileName)
    const constructFilename = () => {
        
        return `${fileName.ConstituencyName}_${fileName.year}`;
      };

    const exportToExcel = async ()=>{
        const flattenedData = excelData.flatMap((item) => item);
        const ws = XLSX.utils.json_to_sheet(flattenedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'data');
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(blob, constructFilename() + fileExtension);
    }
    
    return(
    <>
    <Tooltip title="Excel Export">
    <Button variant="contained" onClick={(e)=> exportToExcel(fileName)}>Download as Excel </Button>
    </Tooltip>
    </>
    )

  }

  export default ExportExcel