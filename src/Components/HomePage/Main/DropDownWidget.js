import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import year from './GeneralElectionYears';

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

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

function getStyles(name, constituencyNames, theme) {
  return {
    fontWeight: constituencyNames === name ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
  };
}

export default function DropDownWidget({ names,year }) {
    const navigate = useNavigate();
  const theme = useTheme();
  const [constituencyName, setConsituencyName] = React.useState('');
  const [yearOfElection, setYearOfElection] = React.useState('');

  const handleChange = (event) => {
    setConsituencyName(event.target.value);
  };
  const handleYearChange = (event)=>{
    setYearOfElection(event.target.value);
  }
  console.log(constituencyName)
  console.log(yearOfElection)
  return (
    <div>
        <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-single-name-label">Constituency Name</InputLabel>
        <Select
          labelId="demo-single-name-label"
          id="demo-single-name"
          value={constituencyName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, constituencyName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>

      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-single-name-label">Year</InputLabel>
        <Select
          labelId="demo-single-name-label"
          id="demo-single-name"
          value={yearOfElection}
          onChange={handleYearChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {year.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, yearOfElection, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <button style={{display:'flex', alignItems:'center', backgroundColor:'black',color:'white', borderRadius:'6px'}} onClick={()=> navigate('/party-wise-dashboard')}><SearchIcon />View Data</button>
      </div>
    </div>
  );
}
