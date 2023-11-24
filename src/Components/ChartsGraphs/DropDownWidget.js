import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import generalElectionYearList from '../../Constants/GeneralElectionYears'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import names from '../../Constants/Constituency-names';

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

export default function SingleSelect() {
    const navigate = useNavigate();
  const theme = useTheme();
  const [constituencyName, setConsituencyName] = React.useState('');
  const [yearOfElection, setYearOfElection] = React.useState('');
  const [indexConst,setIndexConst]=React.useState(0);
  
  const handleChange = (event) => {
    // Get the selected name and its index
    const selectedName = event.target.value;
    const selectedIndex = names.indexOf(selectedName);
    // Set the index as the state
    setConsituencyName(selectedName);
    setIndexConst(selectedIndex+1)
  };
  const handleYearChange = (event)=>{
    setYearOfElection(event.target.value);
  }
  // console.log(constituencyName)
  // console.log(yearOfElection)
  return (
    <div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-single-name-label">Constituency Name</InputLabel>
          <Select
            labelId="demo-single-name-label"
            id="demo-single-name"
            // value={constituencyName !== '' ? names[constituencyName] : ''} 
            value={constituencyName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, names[constituencyName], theme)}
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
            {generalElectionYearList.map((name) => (
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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '6px',
          }}
          onClick={() => {
            if (constituencyName !== '' && yearOfElection.length > 0) {
              navigate('/party-wise-dashboard', {
                state: { indexConst, yearOfElection },
              });
            } else if (yearOfElection && constituencyName === '') {
              navigate('/dashboard-all-years', {
                state: { indexConst, yearOfElection },
              });
            } else {
              alert('Please enter year to continue');
            }
          }}
        >
          <SearchIcon /> View Data
        </button>
      </div>
    </div>
  );
}
