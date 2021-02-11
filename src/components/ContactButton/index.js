import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexgrow: 1,
    },
    menuItem: {
        paddingRight: 8,
        fontSize: 16,
      fontWeight: 400,
    },
    btn: {
      marginTop: '40px',
      fontSize: 13,
      backgroundColor: '#1b75bc',
      '&:hover': {
        backgroundColor: '#262261',
      },
      color: 'white',
      paddingTop: '7px',
      borderRadius: 3,
      zIndex: 100,
    }
  }));
function Contact() {
const classes = useStyles();

  return (
    <div>
      <Button className={classes.btn}
        variant='contained'
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        linkButton={true}
      >CONTACT
      </Button>
    </div>
  );
}
export default Contact;