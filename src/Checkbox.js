import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const label = {inputProps : {'aria-label' : "Basic checkbox demo"}}

export function BasicCheckbox(){
    return(
        <div>
            <Checkbox {...label} defaultChecked color='secondary'/>
            <Checkbox {...label} color='success'/>
            <Checkbox {...label} disabled/>
            <Checkbox {...label} disabled checked/>
        </div>
    )

}

export function CheckboxLabel(){
    return(
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
            <FormControlLabel required control={<Checkbox />} label="Required"/>
            <FormControlLabel disabled control={<Checkbox/>} label="Disabled"/>
        </FormGroup>
    );
}

export function IconCheckbox(){
    return(
        <div>
        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
        </div>
    )
}