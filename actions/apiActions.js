import { RSAA } from 'redux-api-middleware';

// const baseUrl = 'http://34.201.104.13:8000'; // AWS
const baseUrl = 'http://127.0.0.1:8000'; // desktop mobile
// const baseUrl = 'http://192.168.0.159:8000'; // mobile???

export const PLAYER_LIST_RESQUEST = '@@api/PLAYER_LIST_RESQUEST';
export const PLAYER_LIST_SUCCESS = '@@api/PLAYER_LIST_SUCCESS';
export const PLAYER_LIST_FAILURE = '@@api/PLAYER_LIST_FAILURE';

export const fetchPlayerList = page => ({
  [RSAA]: {
    endpoint: `${baseUrl}/rankings/atp/?page=${page}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [PLAYER_LIST_RESQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAILURE],
  },
});
