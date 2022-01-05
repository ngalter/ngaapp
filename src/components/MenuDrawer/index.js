import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { AmplifySignOut } from '@aws-amplify/ui-react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ViewListIcon from '@material-ui/icons/ViewList';
import MessageIcon from '@material-ui/icons/Message';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import './styles.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    },
  btn: {
    color: 'white',
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
        <Link href={'#banner'}>
          <ListItem >
            <ListItemIcon>
                   <HomeIcon className='drawer-icon'/>
            </ListItemIcon>
            <ListItemText primary={'Home'}   className='drawer-label' />
          </ListItem>
          </Link>
        <Divider />
        <Link href={'#about'}>
          <ListItem  >
            <ListItemIcon>
                   <PermIdentityIcon className='drawer-icon' />
            </ListItemIcon>
                <ListItemText primary={'About'}  className='drawer-label' />
          </ListItem>
          </Link>
          <Link href={'#portfolio'}>
          <ListItem >
            <ListItemIcon>
                   <ViewListIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Projects'}  className='drawer-label' />
          </ListItem>
        </Link>
        <Link href={'#contact'}>
          <ListItem >
            <ListItemIcon>
                   <MessageIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Contact'}  className='drawer-label' />
          </ListItem>
        </Link>
        {/* <AmplifySignOut /> */}
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

