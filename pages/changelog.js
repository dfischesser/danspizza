/* eslint-disable react/prop-types */
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import jwtDecode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { getCookie } from '../components/getCookie';

function Header({ title }) {
  return <h1 className="header-styles">{title ? title : 'Default title'}</h1>;
}

export default function ChangeLog(props) {
  console.log('index rendered. all props: ' + JSON.stringify(props))
  console.log('node env: ' + process.env.NODE_ENV)
  return (
    <Box sx={{ minHeight: 450}}>
      <Grid container rowSpacing={1} columnSpacing={2} sx={{ mx: 'auto', textAlign: 'left', p:5}}>
            <Grid xs={12} sx={{ textAlign: 'center' }} >
              <Header title="Change Log" />
            </Grid>
            <Grid xs={12} >
              Release Version 1
            </Grid>
            <Grid xs={4} >
              July 1
            </Grid>
            <Grid xs={8} >
              Material UI Implemented
            </Grid>
            <Grid xs={4} >
              June 19
            </Grid>
            <Grid xs={8} >
              Authentication/Authorization Implemented
            </Grid>
            <Grid xs={4} >
              May 20
            </Grid>
            <Grid xs={8} >
              Azure Environment Setup
            </Grid>
            <Grid xs={4} >
              April 20
            </Grid>
            <Grid xs={8} >
              Initial Commit
            </Grid>
      </Grid>
    </Box>
  );
}