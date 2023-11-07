// --------- Combo Box -------------------

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import  Stack  from '@mui/material/Stack';
import  Box  from '@mui/material/Box';

export function ComboBox(){
    return(
        <Stack spacing={1} sx = {{width:300}}>
        <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={top10Films}
        sx={{width:300, padding:3}}
        renderInput={(params) => <TextField{...params} label = 'Movie'/>}
        />

        <Autocomplete
        disableCloseOnSelect
        id='cdisable-close-on-select'
        options={top10Films}
        sx={{width:300, padding:3}}
        renderInput={(params) => <TextField{...params} label = 'disable-close-on-select'/>}
        />

<Autocomplete
        disableClearable
        id='disable-Clearable'
        options={top10Films}
        sx={{width:300, padding:3}}
        renderInput={(params) => <TextField{...params} label = 'disable-Clearable'/>}
        />
        </Stack>
    );
    }

    const top10Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
          label: 'The Lord of the Rings: The Return of the King',
          year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 }];
      

export function Country(){
    return(
        <Autocomplete
        id='country-select'
        sx={{width:300,padding:3}}
        options={countries}
        getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
          />
      )}
      />

    );
}

const countries = [
    { code: 'IN', label: 'India', phone: '91' },
    { code: 'AU', label: 'Australia', phone: '61'},
    { code: 'FR', label: 'France', phone: '33'},
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'US', label: 'United States', phone: '1' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'JP', label: 'Japan', phone: '81' },
];
