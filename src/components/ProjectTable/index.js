import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import data from '../data/projects.json';
import './styles.css'

  
export default function ProjectTable() {
    return (<div className='tbl-bkd'>
        <div className='tbl-header'>Current Projects</div>
        <Paper className='tbl-wrapper'>
        <table>
        {/* <caption> Current Projects</caption> */}
          {data.data.map((row, i) => (
              <tr className='tr' key={i} >
                  <td>
                      <Link 
                          href={row.url}
                          target={"blank"}
                          rel={"noopener noreferrer"}>
                          {row.header}<br />{row.text}
                      </Link>
                      </td>
                  <td align="right" ><img className='tbl-img' src={row.img} /></td>
              </tr>
          ))}
       
      </table>
            </Paper></div>
  );
}
