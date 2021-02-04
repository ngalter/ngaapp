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
      marginTop: '10px',
      fontSize: 13,
      backgroundColor: 'green',
      '&:hover': {
        backgroundColor: 'darkgreen',
      },
      color: 'white',
      paddingTop: '7px',
      borderRadius: 30,
      zIndex: 100,
    }
  }));
function SignUp() {
const classes = useStyles();

  return (
    <div>
      <Button className={classes.btn}
        variant='contained'
        href="https://runsignup.com/Race/NJ/WestWindsor/MercerCountyTurkeyTrot"
        target="_blank"
        rel="noopener noreferrer"
        linkButton={true}
      >Sign&nbsp;Up
      </Button>
    </div>
  );
}
export default SignUp;