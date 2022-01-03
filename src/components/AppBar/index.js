import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import MenuDrawer from '../MenuDrawer';
import MailIcon from '@material-ui/icons/Mail';
import  "./styles.css";


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
    width: '100vw',
  },
  textFirst: {
    paddingLeft: '5px',
    color: 'lemonChiffon',
  },
  toolBar: {
    width: '100%',
  },
  textSecond: {
    color: 'lightBlue',
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appbar} elevation={1}>
        <Toolbar className={classes.toolBar}>
        <MenuDrawer />
          <Link style={{ textDecoration: 'none' }} href={'#banner'}>
            <p className={classes.title}><span className={classes.textFirst}>Nancy</span><span className={classes.textSecond}>Alter</span></p>
          </Link>
          <Link href={'#contact'}>
            <MailIcon className={'mail-icon'}/> 
          </Link>   
          </Toolbar>
      </AppBar>
    </div>
  );
}

