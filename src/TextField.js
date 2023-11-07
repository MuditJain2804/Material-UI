import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export function BasicTextFields() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    );
}

export function FormPropsTextField(){
  return(
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root':{m:1,width:'25ch'},
      }}
      noValidate
      autoComplete='off'
      >
        <div>
          <TextField
            required
            id='outlined-required'
            label='Required'
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id='outlined-disabled'
            label='Disabled'
            defaultValue="Hello World"
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete="current-password"
          />
          <TextField
            id='outlined-read-only'
            label='Read Only'
            defaultValue="Hello World"
            InputProps={{readOnly:true,}}
          />
          <TextField
            id='outlined-number'
            type='number'
            label='Number'
            InputLabelProps={{shrink:true,}}
          />
          <TextField
            id='outlined-search'
            label='Search'
            type='search'
          />
          <TextField
            id='outlined-helper-text'
            label='Helper text'
            defaultValue="Default Value"
            helperText="Some Important text"
          />
        </div>
      </Box>
  );
}


export function ValidationTextFields(){
  return(
    <Box
    component="form"
      sx={{
        '& .MuiTextField-root':{m:1,width:'25ch'},
      }}
      noValidate
      autoComplete='off'
    >
    <div>
    <TextField
        error
        id='outlined-error'
        label="Error"
        defaultValue="Hello World"
        />
      <TextField
        error
        id='outlined-error-helper-text'
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect Entry"
        />
    </div>
    </Box>
  )
 
}

export function MultilineTextFields(){
  return(
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root':{m:1,width:'25ch'},
    }}
    noValidate
    autoComplete='off'
    >
    <div>
      <TextField
        id='outlined-multiline-flexible'
        label="Multiline"
        multiline
        maxRows={4}
      />
      <TextField
        id='outlined-textarea'
        label="Multiline Placeholder"
        multiline
        placeholder='Placeholder'
      />
      <TextField
        id='outlined-multiline-static'
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
    </div>
    </Box>
  )
  
}


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export function SelectTextField(){
  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root':{m:1,width:'25ch'},
      }}
      noValidate
      autoComplete='off'
    >
    <div>
      <TextField
        id='Outlined-select-currency'
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option)=>(
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id='Outlined-select-currency-native'
        select
        label="Native select"
        defaultValue="EUR"
        SelectProps={{
          native:true,
        }}
        helperText="Please select your currency"
      >
        {currencies.map((option)=>(
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
    </Box>
  )
}