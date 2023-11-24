import React from 'react'
// import { DatePicker, InlineDatePicker } from "material-ui-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import constituency_names from '../.././Constants/Constituency-names'
const ElectionData = () => {
    const [t_date, setT_date] = useState("");
    const handleYearSelection = (date) => {
        const formattedDate = dayjs(date).format('YYYY');
        setT_date(formattedDate)
    };
    console.log(t_date)
    return (
        <div className='election-data-main'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    views={['year']}
                    label="Year"
                    onChange={handleYearSelection}
                />
            </LocalizationProvider>
        </div>

    )
}

export default ElectionData