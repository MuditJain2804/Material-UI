import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button  from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon  from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function Basic(){
    return(
        <Stack spacing={2} direction="row">
            <Button variant = "text">Text</Button>
            <Button variant = "contained">Contained</Button>
            <Button variant = "outlined">Outlined</Button>
        </Stack>
    );
}

export function TextButton(){
    return(
        <Stack spacing={2} direction="row">
            <Button >Primary</Button>
            <Button disabled>Disabled</Button>
        </Stack>
    );
}

export function ContainedButton(){
    return(
        <Stack spacing={2} direction="row">
            <Button variant='contained'>Contained</Button>
            <Button variant='contained' disabled>Disabled</Button>
        </Stack>
    );
}

export function ColorButton(){
    return(
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
    );
}

export function ButtonSize(){
    return(
        <Stack spacing={2} direction = "row">
            <Button variant='outlined' size='small'>Small</Button>
            <Button variant='outlined' size='medium'>Medium</Button>
            <Button variant='outlined' size='large'>Large</Button>
        </Stack>
    )
}

export function IconLabelButton(){
    return(
        <Stack spacing={2} direction="row">
            <Button variant='outlined' startIcon={<DeleteIcon/>}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<SendIcon/>}>
                Send
            </Button>
        </Stack>
    )
}

export function IconButtons(){
    return(
        <Stack direction="row" spacing={2}>
            <IconButton aria-label='delete'>
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label='delete' color='primary' disabled>
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label='add an alarm' color='secondary'>
                <AlarmIcon/>
            </IconButton>
            <IconButton aria-label='add to shopping cart'>
                <AddShoppingCartIcon />
            </IconButton>
        </Stack>
    )
}

export function IconButtonColor(){
    return(
        <Stack direction="row" spacing={2}>
            <IconButton aria-label='fingerprint' color='success'>
                <Fingerprint />
            </IconButton>
            <IconButton aria-label='fingerprint' color='error'>
                <Fingerprint />
            </IconButton>
        </Stack>
    )
}


export function BasicButtonGroup(){
    return(
        <ButtonGroup variant='contained'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
}


export function ButtonGroupOrientation(){
    return(
        <ButtonGroup variant='outlined' orientation='vertical'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    )
}