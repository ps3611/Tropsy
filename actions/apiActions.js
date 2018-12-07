import { RSAA } from 'redux-api-middleware';

const baseUrl = 'http://127.0.0.1:8000';

export const PLAYER_LIST_RESQUEST = '@@api/PLAYER_LIST_RESQUEST';
export const PLAYER_LIST_SUCCESS = '@@api/PLAYER_LIST_SUCCESS';
export const PLAYER_LIST_FAILURE = '@@api/PLAYER_LIST_FAILURE';

export const fetchPlayerList = () => ({
  [RSAA]: {
    endpoint: `${baseUrl}/players/`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [PLAYER_LIST_RESQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAILURE],
  },
});
