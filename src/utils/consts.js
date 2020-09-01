export const RQConfig = {
  queries: {
    cacheTime: 8 * 60 * 1000,
    refetchOnMount: false,
  }
};

export const endpoints = {
  videos: 'URL_TO_FETCH_VIDEOS',
};

export const qKeys = {
  videos: 'app-videos',
};