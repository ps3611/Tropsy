import * as api from '../actions/apiActions.js';

const initialState = {
  playerList: [],
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case api.PLAYER_LIST_SUCCESS:
      return {
        ...state,
        playerList: [...state.playerList, ...action.payload.results],
        errors: {},
      };
    case api.PLAYER_LIST_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};
