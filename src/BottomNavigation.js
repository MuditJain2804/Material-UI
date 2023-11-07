import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';


export function SimpleBottomNavigation(){
    const[value, setValue] = React.useState(0);

    return(
        <Box sx={{width:500}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) =>{
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction label='Recents' icon={<RestoreIcon/>}/>
                <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label='Nearby' icon={<LocationOnIcon/>}/>
            </BottomNavigation>
        </Box>
    )
}


export function LabelBottomNavigation(){
    const[value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };

    return(
        <BottomNavigation sx={{width:500}} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label='Recents'
                value='recents'
                icon={<RestoreIcon/>}
            />
             <BottomNavigationAction
                label='Favorites'
                value='favorites'
                icon={<FavoriteIcon/>}
            />
             <BottomNavigationAction
                label='Nearby'
                value='nearby'
                icon={<LocationOnIcon/>}
            />
             <BottomNavigationAction
                label='Folder'
                value='folder'
                icon={<FolderIcon/>}
            />
        </BottomNavigation>
    )
}