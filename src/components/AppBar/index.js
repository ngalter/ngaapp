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
    fontFamily: 'Naste Light',
    color: 'white',
    fontSize: '22px',
    marginTop: '17px',
    paddingTop: '2px'
  },
  appbar: {
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  textFirst: {
    paddingLeft: '5px',
    color: 'lemonChiffon',
  },
  textSecond: {
    color: 'lightBlue',
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
            <p className={classes.title}><span className={classes.textFirst}>NG</span><span className={classes.textSecond}>Alter</span></p>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

