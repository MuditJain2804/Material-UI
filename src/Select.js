import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect(){
    const[age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <Box sx={{minWidth:120}}>
            <FormControl fullWidth >
                <InputLabel>Age</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-react'
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value = {10}>Ten</MenuItem>
                    <MenuItem value = {20}>Twenty</MenuItem>
                    <MenuItem value = {30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export function SelectAutoWidth() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22.5}>Twenty two and a half</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }