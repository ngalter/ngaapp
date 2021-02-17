import React from 'react';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import data from '../data/projects.json';
import './styles.css'

  
export default function ProjectTable() {
    return (<div id={'portfolio'} className='tbl-bkd'>
        <div className='tbl-header'>Projects</div>
        <Box className='tbl-wrapper'>
            <table>
            <tbody>
          {data.data.map((row, i) => (
              <tr className='tr' key={i} >
                  <td>
                      <Link 
                          href={row.url}
                          target={"blank"}
                          rel={"noopener noreferrer"}>
                          <span className='hdr'>{row.header}</span><br />
                          <span className='txt'>{row.text}</span>
                      </Link>&nbsp;
                      { row.git
                          ?
                      <Link 
                          href={row.git}
                          target={"blank"}
                          rel={"noopener noreferrer"}>
                          <i className="fab fa-github fa-sm"></i>
                          </Link>
                          : ""
                        }
                      </td>
                  <td align="right" ><img className='tbl-img' src={row.img} alt='project'/></td>
              </tr>
          ))}
        </tbody>
      </table>
            </Box></div>
  );
}
