import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import IntroContent from '../IntroContent';
import './styles.css';

const listIntros = `
query ListIntros {
  listIntros {
    items {
        header
        text
    }
  }
}`

function Intro() {
  const [introData, setIntroData] = useState([]);

  const loadIntroData = async () => {
    const { data } = await API.graphql(
      graphqlOperation(listIntros)
    );
    setIntroData(data?.listIntros?.items);
  };
    
  useEffect(() => {
    loadIntroData();
  }, [])

  return (
    
    <div className='header-wrap'>
    <div className='box'>
        <div className='grid-container'>   
                {introData.map((intro, i) => (
                  <IntroContent
                        id={i}
                        header={intro.header}
                        text={intro.text}
                    />
                ))}
        </div>   
      </div>
    </div>
    );
}

export default Intro;