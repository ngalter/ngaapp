import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    avatar: {
    backgroundColor: '#cc9900',
    backgroundColor: 'white',
    color: '#0c2557',
    },
    top: {
      backgroundColor: '#0c2557',
      transition: '.3s',
    },
    text: {
      height: '120px'
    },
    header: {
      color: 'white',
      fontSize: 20,
    },
    font: {
        fontFamily: 'Paytone One, sans-serif;',
        color: 'white'
    },
    frame: {
      backgroundColor: 'black',
      padding: '2px',
      borderColor: 'black',
    }
  }));


function IntroContent(props) {
    const classes = useStyles();
    return (<div>
<Card>
<CardHeader className={classes.top}
avatar={
  <Avatar className={classes.avatar}>
    <i class={props.icon}></i>
  </Avatar>
}
title={<Typography className={classes.font}>{props.header}</Typography>}
/>
<CardContent>
<Typography variant="body2" color="textSecondary"
className={classes.text}
component="p"
>
  {props.text}
</Typography>
</CardContent>
</Card>
    </div>
  );
}
export default IntroContent;
