import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    marginTop: '15px',
    paddingTop: '1px'
  },
  appbar: {
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  textFirst: {
    paddingLeft: '45px',
    fontFamily: 'Roboto;',
    color: 'teal',
  },
  textSecond: {
    fontFamily: 'Roboto;',
    color: 'steelblue',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar} elevation={1}>
        <Toolbar >
        <MenuDrawer />
          <Link style={{ textDecoration: 'none' }} href={'#banner'}>
            <p className={classes.title}><span className={classes.textFirst}>NG</span><span className={classes.textSecond}>ALTER</span></p>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

