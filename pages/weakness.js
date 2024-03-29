/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper';
import Head from 'next/head';
import { NextLinkComposed } from '../components/Link';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { Abril_Fatface, Italianno } from 'next/font/google';
import { styled } from '@mui/material/styles';

export const abrilFatFace = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const italianno = Italianno({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export default function Weakness(props) {

  const Logo = styled(Typography)({
    fontFamily: abrilFatFace.style.fontFamily
  });

  const Blurb = styled(Typography)({
    fontFamily: italianno.style.fontFamily,
    fontSize: '2rem'
  });

  return (
    <Box sx={{ minHeight: 450 }}>
      <Head>
        <title>Weakness</title>
      </Head>
      <Grid container rowSpacing={1} columnSpacing={2} alignItems={'center'} sx={{ mx: 'auto', textAlign: 'center' }}>
        <Grid xs={12} >
          <Logo variant='h1' 
                    sx={{
                        fontSize: '2.5rem',
                        letterSpacing: '.1rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        mt: 6,
                        mb: 1
                    }}>What is your Greatest Weakness?</Logo>
        </Grid>
        <Grid xs={12} >
          <Typography>I'd say that I have a tendency to over-prepare, and it can sometimes come off as arrogance.</Typography>
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