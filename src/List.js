import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export function BasicList(){
    return(
        <Box sx={{width:'100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        <nav>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Draft"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    </Box>
    )
    
}


export function NestedList(){
    const[open,setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return(
        <List 
            sx={{width:'100%', maxWidth:360, bgcolor:"backdround.paper"}}
            component="nav"
            subheader={
                <ListSubheader component="div">
                    Nested List Item
                </ListSubheader>
            }
        >
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Sent Mail"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Drafts"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton> 
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{pl:4}}>
                        <ListItemIcon>
                            <StarBorder/>
                        </ListItemIcon>
                        <ListItemText primary="Starred"/>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}