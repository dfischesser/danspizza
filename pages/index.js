/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper';
import { NextLinkComposed } from '../components/Link';

export default function HomePage(props) {
  console.log('index rendered. all props: ' + JSON.stringify(props))
  console.log('node env: ' + process.env.NODE_ENV)
  return (
    <Box sx={{ minHeight: 450 }}>
      <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{ mx: 'auto', textAlign: 'center' }}>
        <Grid xs={12} >
          <Typography variant='h4' 
                    sx={{
                        fontFamily: 'fantasy',
                        fontWeight: 500,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        mt: 6,
                        mb: 3
                    }}>DAN'S PIZZA</Typography>
        </Grid>
        <Grid xs={12} >
          <Typography> Excellence in a Pie.</Typography>
        </Grid>
        <Grid xs={12} >
          {props.role === 'Employee' &&
            <Paper sx={{width: 200, mx: 'auto', mt:20}}>
              <Typography sx={{bgcolor: 'background.beige'}}>Welcome Back, {props.userName}! <br />
                <Link component={NextLinkComposed} underline='hover' to='/backoffice/manage' >
                  Access Back Office
                </Link>
              </Typography>
            </Paper>
          }
        </Grid>
      </Grid>
    </Box>
  );
}