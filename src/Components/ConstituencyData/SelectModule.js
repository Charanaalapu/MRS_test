import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import generalElectionYearList from '../../Constants/GeneralElectionYears';
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

export default function SingleSelect() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [constituencyName, setConsituencyName] = React.useState('');
  const [yearOfElection, setYearOfElection] = React.useState('');

  const handleChange = (event) => {
    setConsituencyName(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearOfElection(event.target.value);
  };

  const handleSearch = () => {
    if (constituencyName !== '' && yearOfElection !== '') {
      navigate('/party-wise-dashboard', {
        state: { indexConst: names.indexOf(constituencyName) + 1, yearOfElection },
      });
    } else if (yearOfElection && constituencyName === '') {
      navigate('/dashboard-all-years', {
        state: { indexConst: names.indexOf(constituencyName) + 1, yearOfElection },
      });
    } else {
      alert('Please enter both constituency and year to continue');
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <FormControl sx={{ m: 1, width: 300, borderColor: 'black', backgroundColor: 'white' }}>
          <InputLabel id="demo-single-name-label">Const.</InputLabel>
          <Select
            labelId="demo-single-name-label"
            id="demo-single-name"
            value={constituencyName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
          >
            <MenuItem value="">No Select</MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, constituencyName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, width: 300, backgroundColor: 'white' }}>
          <InputLabel id="demo-single-name-label">Year</InputLabel>
          <Select
            labelId="demo-single-name-label"
            id="demo-single-name"
            value={yearOfElection}
            onChange={handleYearChange}
            input={<OutlinedInput label="Name" sx={{ borderColor: 'black' }} />}
            MenuProps={MenuProps}
          >
            <MenuItem value="">No Select</MenuItem>
            {generalElectionYearList.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, yearOfElection, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '6px',
            }}
            onClick={handleSearch}
          >
            <SearchIcon />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

function getStyles(name, selectedName, theme) {
  return {
    fontWeight: selectedName === name && theme && theme.typography
      ? theme.typography.fontWeightMedium
      : theme && theme.typography
      ? theme.typography.fontWeightRegular
      : 'normal',
  };
}
