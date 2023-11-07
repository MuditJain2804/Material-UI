import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
export function BasicSwitch(){
    return(
        <div>
            <Switch defaultChecked/>
            <Switch />
            <Switch disabled defaultChecked/>
            <Switch disabled/>
        </div>
    )
}

export function LabelSwitch(){
    return(
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked/>} label='Label'/>
            <FormControlLabel required control={<Switch/>} label='Required'/>
            <FormControlLabel disabled control={<Switch/>} label='Disabled'/>
        </FormGroup>
    )
}