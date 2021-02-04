import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Drawer from '../Drawer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Roboto;',
      color: '#003366',
      fontWeight: 200,
      fontSize: '22px',
  },
  appbar: {
    backgroundColor: 'white',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar >
        <Drawer />
          <Link style={{ textDecoration: 'none' }} href="/" >
          <Typography variant="h6" className={classes.title}>
                      Nancy Alter
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

