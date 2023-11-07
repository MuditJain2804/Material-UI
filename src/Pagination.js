import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function BasicPagination(){
    return(
        <Stack spacing={2}>
            <Pagination count={10}/>
            <Pagination count={10} color='primary'/>
            <Pagination count={10} color='secondary'/>
            <Pagination count={10} disabled/>
        </Stack>
    )
}

export function PaginationOutlined(){
    return(
        <Stack spacing={2}>
            <Pagination count={10} variant="outlined"/>
            <Pagination count={10} color='primary' variant="outlined"/>
            <Pagination count={10} color='secondary' variant="outlined"/>
            <Pagination count={10} disabled variant="outlined"/>
        </Stack>
    )
}

export function PaginationRounded(){
    return(
        <Stack spacing={2}>
            <Pagination count={10} shape="rounded"/>
            <Pagination count={10} shape="rounded" variant="outlined"/>
        </Stack>
    )
}

export function PaginationButton(){
    return(
        <Stack spacing={2}>
            <Pagination count={10} showFirstButton showLastButton/>
            <Pagination count={10} hideNextButton hidePrevButton/>
        </Stack>
    )
}