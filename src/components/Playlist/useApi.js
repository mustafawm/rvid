import { useQuery } from 'react-query';
import api from 'utils/api';
import { qKeys } from 'utils/consts';
import dummyData from '../../dummyData';

function fetchVideos(params) {
  // return api.get('/video').then(res => res.data);
  return Promise.resolve(dummyData);
}

export function useFetchVideos() {
  return useQuery({
    queryKey: qKeys.videos,
    queryFn: fetchVideos,
    config: {
      refetchOnWindowFocus: false,
    }
  });
}