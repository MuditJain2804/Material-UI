import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function ToggleButtons(){
    const[alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event,newAlignment) => {
        setAlignment(newAlignment);
    };
    return(
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
        >
            <ToggleButton value="left">
                <FormatAlignLeftIcon/>
            </ToggleButton>
            <ToggleButton value="center">
                <FormatAlignCenterIcon/>
            </ToggleButton>
            <ToggleButton value="right">
                <FormatAlignRightIcon/>
            </ToggleButton>
            <ToggleButton value="justify">
                <FormatAlignJustifyIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}


export function ToggleButtonsMultiple(){
    const[formats,setFormats] = React.useState(() => ['bold','italic']);

    const handleFormat = (event,newFormats) => {
        setFormats(newFormats);
    };

    return(
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
        >
            <ToggleButton value="bold">
                <FormatBoldIcon/>
            </ToggleButton>
            <ToggleButton value="italic">
                <FormatItalicIcon/>
            </ToggleButton>
            <ToggleButton value="underlined">
                <FormatUnderlinedIcon/>
            </ToggleButton>
            <ToggleButton value="color">
                <FormatColorFillIcon/>
                <ArrowDropDownIcon/>
            </ToggleButton>
        </ToggleButtonGroup>

    );
}