import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typogarphy from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export function ButtonAppBar(){
    return(
        <Box sx={{flexGrow:1, width:"50%"}}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        sx={{mr:2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typogarphy variant='h6' component="div"
                        sx={{flexGrow:1}}>News</Typogarphy>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}