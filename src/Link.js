import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
export function Links() {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
        },
      }}
    >
      <Link href="https://mui.com/material-ui/" target="_blank" rel="noopener noreferrer">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
  );
}