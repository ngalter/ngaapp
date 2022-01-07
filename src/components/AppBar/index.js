import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
// import MenuDrawer from '../MenuDrawer';
import MailIcon from '@material-ui/icons/Mail';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuicon: {
    marginRight: theme.spacing(2),
    fontFamily: 'Naste Light',
    color: 'white',
    marginLeft: '20px',
  },
  inputRoot: {
    color: 'inherit',
  },
}));

export default function AppBar2() {
  const classes = useStyles();
 
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <MenuDrawer className={classes.menuicon} /> */}
          <Link href="#banner" className={classes.menuicon} variant="h5" underline='none'> Nancy Alter</Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton href={'#contact'} color="inherit">
                <MailIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}