import * as React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export function BasicAlert(){
    return(
        <Stack sx={{width:'50%'}} spacing={2}>
            <Alert severity='error'>This is an error alert - check it out!</Alert>
            <Alert severity='warning'>This is a warning alert - check it out!</Alert>
            <Alert severity='info'>This is an info alert - check it out!</Alert>
            <Alert severity='success'>This is a success alert - check it out!</Alert>
        </Stack>
    )
}

export function DescriptionAlert(){
    return(
        <Stack sx={{width:'50%'}} spacing={2}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                This is an error alert - <strong>check it out!</strong>
            </Alert>
            <Alert severity='warning'>
                <AlertTitle>Warning</AlertTitle>
                This is an Warning alert - <strong>check it out!</strong>
            </Alert>
            <Alert severity='info'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert - <strong>check it out!</strong>
            </Alert>
            <Alert severity='success'>
                <AlertTitle>Success</AlertTitle>
                This is an Success alert - <strong>check it out!</strong>
            </Alert>
        </Stack>
    )
}