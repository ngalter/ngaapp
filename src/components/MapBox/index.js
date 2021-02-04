/* eslint-disable */ 
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Map from '../Map';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  outerbox: {
    maxWidth: '100%',
    margin: 'auto',
    maxHeight: 650,
    height: 650,
    marginBottom: 0,
    paddingBottom: 0,
  },
  fixedsize: {
    maxWidth: '100%',

  }
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
     <Grid container spacing={12}>
       
        <Grid item sm={12}>
          <Box className={classes.fixedsize}>
          <Box className={classes.outerbox}>
             <Map />
            </Box>
            </Box>

            </Grid> 
        </Grid>
    </div>
  );
}