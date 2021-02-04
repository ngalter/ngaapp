import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import BannerContent from '../BannerContent';
import './styles.css';

const listBanners = `
query ListBanners {
  listBanners {
    items {
        title
        text
    }
  }
}`

function Banner() {
    const [bannerData, setBannerData] = useState([]);

    const loadBannerData = async () => {
      const { data } = await API.graphql(
        graphqlOperation(listBanners)
      );
      setBannerData(data?.listBanners?.items);
    };
    
    useEffect(() => {
      loadBannerData();
    }, [])

  return (<div>
    {bannerData.map((banner, i) => (
                      <BannerContent
                            id={i}
                            title={banner.title}
                            text={banner.text}
                      />    
      ))}</div>
        );
}

export default Banner;
