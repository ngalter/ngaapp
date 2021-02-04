import React from 'react';
import clsx from 'clsx';
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
    menuButton: {
      color: '#003366',
      fontWeight: 100,
      backgroundColor: 'transparent',
    },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
        <Link
          href="/"
        >
          <ListItem button >
            <ListItemIcon>
                   <HomeIcon className='signup-icon'/>
            </ListItemIcon>
            <ListItemText primary={'Home'}   className='drawer-label' />
          </ListItem>
          </Link>
          <Divider />
          <Link href={'#portfolio'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Portfolio'}  className='drawer-label' />
          </ListItem>
          </Link>
          <Link href={'#sponsorinformation'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
                <ListItemText primary={'Sponsor Information'}  className='drawer-label' />
          </ListItem>
          </Link>
          <Link href={'#charityinformation'}>
          <ListItem  button >
            <ListItemIcon>
                   <InfoIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Charity Information'}  className='drawer-label' />
          </ListItem>
          </Link>
          <Divider />
        <Link href="mailto:mercerturkeytrot@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
          <ListItem  button >
            <ListItemIcon>
                   <MailIcon className='drawer-icon' />
            </ListItemIcon>
            <ListItemText primary={'Contact'} className='drawer-label' />
          </ListItem>
          <AmplifySignOut />
        </Link>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
              <Button onClick={toggleDrawer('left', true)}><MenuIcon className={classes.menuButton}/></Button>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}

