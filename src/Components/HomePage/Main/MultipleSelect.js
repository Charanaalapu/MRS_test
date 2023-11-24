import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const years = [1983, 1987, 1991, 1995, 2000, 2005, 2010, 2014, 2019];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [Constituency, setConstituency] = React.useState([]);

  const ConstituencyhandleChange = (event) => {
    setConstituency(event.target.value);
  };

  const [selectedyear, setSelectedYear] = React.useState([]);

  const yearhandleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const viewData =(e)=>{
    e.preventDefault()
    console.log(Constituency, "=====", selectedyear);


  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-select-Constituency"
            select
            label="Constituency"
            defaultValue="EUR"
            onChange={ConstituencyhandleChange}
            helperText="Please select Constituency"
            
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-Year"
            select
            label="Year"
            value={selectedyear}
            onChange={yearhandleChange}
            defaultValue="EUR"
            helperText="Please select Year"
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </TextField>
          <button id='search_icon' style={{display:'flex', alignItems:'center', backgroundColor:'black',color:'white', borderRadius:'6px'}} onClick={viewData}><SearchIcon />View Data</button>

        </div>
      </Box>
    </>
  );
}
