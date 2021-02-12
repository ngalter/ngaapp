import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    text: {
      height: '120px',
      paddingRight: '15px',
      paddingLeft: '15px',
      paddingBottom: '20px'
    },
    header: {
      color: 'white',
      fontSize: 22,
      fontWeight: '700',
      paddingRight: '5px',
      paddingLeft: '5px'
    },
  card: {
      paddingTop: '20px',
      color: '#2a3990',
      fontSize: 20,
      fontWeight: '500',
      textAlign: 'center'
    },
    frame: {
      backgroundColor: 'black',
      padding: '2px',
      borderColor: 'black',
    }
  }));


function InterestContent(props) {
    const classes = useStyles();
    return (<div>
<Card>
<CardHeader
title={<Typography className={classes.card}><i className={props.icon}></i>&nbsp;{props.header}</Typography>}
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
export default InterestContent;
