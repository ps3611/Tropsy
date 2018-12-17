import { RSAA } from 'redux-api-middleware';

const baseUrl = 'http://34.201.104.13:8000'; // AWS
// const baseUrl = 'http://127.0.0.1:8000'; // desktop mobile
// const baseUrl = 'http://192.168.0.159:8000'; // mobile???

export const ATP_LIST_REQUEST = '@@api/ATP_LIST_REQUEST';
export const ATP_LIST_SUCCESS = '@@api/ATP_LIST_SUCCESS';
export const ATP_LIST_FAILURE = '@@api/ATP_LIST_FAILURE';

export const ELO_LIST_REQUEST = '@@api/ELO_LIST_REQUEST';
export const ELO_LIST_SUCCESS = '@@api/ELO_LIST_SUCCESS';
export const ELO_LIST_FAILURE = '@@api/ELO_LIST_FAILURE';

export const fetchAtpList = page => ({
  [RSAA]: {
    endpoint: `${baseUrl}/rankings/atp/?page=${page}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [ATP_LIST_REQUEST, ATP_LIST_SUCCESS, ATP_LIST_FAILURE],
  },
});

export const fetchEloList = page => ({
  [RSAA]: {
    endpoint: `${baseUrl}/rankings/elo/?page=${page}`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [ELO_LIST_REQUEST, ELO_LIST_SUCCESS, ELO_LIST_FAILURE],
  },
});
