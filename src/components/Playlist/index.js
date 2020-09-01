import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useFetchVideos } from './useApi';
import { prepareData } from './helpers';

export default function Playlist() {
  const { data, isLoading, isError, error } = useFetchVideos();

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Something went wrong! {String(error)}</p>;
  }
  return (
    <div className="w-full flex justify-center mt-2">
      <ImageGallery
        additionalClass="max-w-screen-sm"
        items={prepareData(data || [])}
      />
    </div>
  )
}