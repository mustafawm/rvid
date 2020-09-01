import React from 'react';
import ReactPlayer from 'react-player';

export function prepareData(data=[]) {
  const galleryData = [];

  data.forEach((item) => {
    galleryData.push({
      original: item.url,
      thumbnail: 'https://via.placeholder.com/550?text=COMING+SOON',
      embedUrl: item.url,
      description: item.title,
      renderItem: () => <ReactPlayer url={item.url} />
    });
  });

  return galleryData;
}