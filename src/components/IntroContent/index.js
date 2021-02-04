import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import './styles.css'

function IntroContent(props) {
    return (<div>
        {props.id === 0
            ?
            <div>
            <Box className='outer'>
            <Typography variant="h4">
                {props.header}
            </Typography>
            <Box className='inner'>
            <Typography component="p">
                {props.text}
            </Typography>
            </Box>
            </Box>
            </div>
            :
            ""
        }
    </div>
  );
}
export default IntroContent;
