import { RSAA } from 'redux-api-middleware';
const baseUrl = 'https://private-4fe0f6-tennisroo.apiary-mock.com';

export const PLAYER_LIST_RESQUEST = '@@api/PLAYER_LIST_RESQUEST';
export const PLAYER_LIST_SUCCESS = '@@api/PLAYER_LIST_SUCCESS';
export const PLAYER_LIST_FAILURE = '@@api/PLAYER_LIST_FAILURE';

export const fetchPlayerList = () => ({
  [RSSA]: {
    endpoint: `${baseUrl}/players/`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [PLAYER_LIST_RESQUEST, PLAYER_LIST_SUCCESS, PLAYER_LIST_FAILURE],
  },
});
