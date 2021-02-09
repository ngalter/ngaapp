import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuDrawer from '../MenuDrawer';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Roboto;',
      color: 'white',
      fontWeight: 700,
      fontSize: '22px',
  },
  appbar: {
    backgroundColor: 'rgba(0,0,0,.2)',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar} elevation={0}>
        <Toolbar >
        <MenuDrawer />
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

