import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './styles.css'

const useStyles = makeStyles((theme) => ({
    header: {
        flexGrow: 1,
        color: 'white',
        fontSize: 40,
        paddingTop: '185px',
        textAlign: 'center',
        fontWeight: '700'
    }

    
}));

function BannerContent(props) {
    const classes = useStyles();
    return (<div>
        {props.id === 0
            ?
        <div className='bg-bkd'>
        <div className='banner-wrap'>
        <div className='banner-container'>                 
        <Typography className={classes.header}>
                {props.title}<br />{props.text}
        </Typography>   

        </div>
                </div>15
                </div>
            :
            ""
        }

    </div>

  );
}

export default BannerContent;