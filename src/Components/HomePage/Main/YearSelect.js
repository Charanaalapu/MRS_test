import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

const years = [
 1983,1987,1991,1995,2000,2005,2010,2014,2019
];

function getStyles(name, selectedyear, theme) {
  return {
    fontWeight:
      selectedyear.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function YearSelect() {
    
  const theme = useTheme();
  const [selectedyear, setSelectedYear] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedYear(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Year</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={selectedyear}
          onChange={handleChange}
          input={<OutlinedInput label="Year" />}
          MenuProps={MenuProps}
        >
          {years.map((year) => (
            <MenuItem
              key={year}
              value={year}
              style={getStyles(year, selectedyear, theme)}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
