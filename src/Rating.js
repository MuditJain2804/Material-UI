import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export function BasicRating(){
    const[value,setValue] = React.useState(2);

    return(
        <Box sx={{'&>legend':{mt:2},}}>
            <Typography component="legend">Controlled</Typography>
            <Rating
                name='simple-controlled'
                value={value}
                onChange={(event,newValue)=>{setValue(newValue);}}
            />
            <Typography component="legend">Read Only</Typography>
            <Rating name='read-only' value={value} readOnly/>
            <Typography component="legend">Disabled</Typography>
            <Rating name='disabled' value={value} disabled/>
            <Typography component='legend'>No rating given</Typography>
            <Rating name='no-value' value={null}/>
        </Box>
        
    );
}

export function RatingPrecison(){
    return(
        <Stack spacing={1}>
            <Rating name='precised-rating' defaultValue={3.4} precision={0.1}/>
            <Rating name='precised-rating-read' defaultValue={3.4} precision={0.1} readOnly/>
        </Stack>
    )
}