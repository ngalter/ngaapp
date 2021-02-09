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
    backgroundColor: 'gainsboro',
    color: '#0c2557',
    },
    text: {
      height: '120px'
    },
    header: {
      color: 'white',
      fontSize: 22,
      fontWeight: '700',
      paddingRight: '5px',
      paddingLeft: '5px'
    },
    font: {
        fontFamily: 'Paytone One, sans-serif;',
      color: 'rgb(12, 34, 97)',
      fontSize: 20,
      fontWeight: '700'
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
<Card className='grow'>
<CardHeader className='top'
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
