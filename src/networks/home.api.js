import http from '../libs/http';

function searchEntList(data) {
  return http.get('/api/searchEntList', {
    params: data
  });
}
/**
 *
 * 获取热搜榜
 * @param {*} data
 * @returns
 */
function getHotList(data) {
  return http.get('/api/getHotList', { params: data });
}

export {
  searchEntList, getHotList
}
