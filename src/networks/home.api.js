import http from '../libs/http';

function searchEntList(data) {
  return http.get('/api/searchEntList', {
    params: data
  });
}

export {
  searchEntList
}
