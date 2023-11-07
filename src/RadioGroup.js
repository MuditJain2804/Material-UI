import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

export function RadioButtonGroup(){
    return(
        <FormControl>
            <FormLabel >Gender</FormLabel>
            <RadioGroup defaultValue="male" name='radio-button-group'>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            </RadioGroup>
        </FormControl>
    );
}

export function ErrorRadios(){
    const[value, setValue] = React.useState('');
    const[error, setError] = React.useState(false);
    const[helperText, setHelperText] = React.useState('Chose Wisely');

    const handleRadioChange = (event)=>{
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(value === 'best'){
            setHelperText('You got it!');
            setError(false);
        }
        else if(value === 'worst'){
            setHelperText('Sorry, wrong answer!');
            setError(true);
        }
        else{
            setHelperText('Please select an option');
            setError(true);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <FormControl sx={{m:3}} error={error} variant='standard'>
                <FormLabel>Pop quiz: MUI is...</FormLabel>
                <RadioGroup name='quiz' value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="best" control={<Radio/>} label="The best!"/>
                    <FormControlLabel value="worst" control={<Radio/>} label="The worst."/>
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button sx={{mt:3,mr:1}} type='submit' variant='outlined'>
                    Check Answer
                </Button>
            </FormControl>
        </form>
    );
}