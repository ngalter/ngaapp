import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import './styles.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    },
    btn: {
      color: '#1b75bc',
    },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <Link
          href="/"
        >
          <ListItem >
            <ListItemIcon>
                   <HomeIcon className='signup-icon'/>
            </ListItemIcon>
            <ListItemText primary={'Home'}   className='drawer-label' />
          </ListItem>
          </Link>
        <Divider />
        <Link href={'#about'}>
          <ListItem  >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
                <ListItemText primary={'About'}  className='drawer-label' />
          </ListItem>
          </Link>
          <Link href={'#portfolio'}>
          <ListItem >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Current Projects'}  className='drawer-label' />
          </ListItem>
        </Link>
        <Link href={'#contact'}>
          <ListItem >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Contact'}  className='drawer-label' />
          </ListItem>
          </Link>
      </List>
    </div>
  );

  return (
    <div>

        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
      <Button onClick={toggleDrawer('left', true)}>
        <MenuIcon className={classes.btn} />
      </Button>
        
    </div>
  );
}

