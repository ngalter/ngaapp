import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import MenuDrawer from '../MenuDrawer';
import logo from '../img/logo512.png';

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
    // backgroundColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'white',
  },
  img: {
    marginTop: '10px',
    width: '35px',
    height: 'auto'
  },
  textDk: {
    paddingLeft: '45px',
    fontFamily: 'Roboto;',
    color: '#262261',
  },
  textLt: {
    fontFamily: 'Roboto;',
    color: '#1b75bc',
  },
  title: {
    marginTop: '-35px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar} elevation={1}>
        <Toolbar >
        <MenuDrawer />
          <Link style={{ textDecoration: 'none' }} href="/" >
            <img className={classes.img} src={logo} alt='tags' />
            <p className={classes.title}><span className={classes.textDk}>NANCY</span><span className={classes.textLt}>ALTER</span></p>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

