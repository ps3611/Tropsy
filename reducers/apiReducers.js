import * as api from '../actions/apiActions';

const initialState = {
  atpList: [],
  atpPagesLoaded: 0,
  eloList: [],
  eloPagesLoaded: 0,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case api.ATP_LIST_SUCCESS:
      return {
        ...state,
        atpList: [...state.atpList, ...action.payload.results],
        atpPagesLoaded: state.atpPagesLoaded + 1,
        errors: {},
      };
    case api.ATP_LIST_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    case api.ELO_LIST_SUCCESS:
      return {
        ...state,
        eloList: [...state.eloList, ...action.payload.results],
        eloPagesLoaded: state.eloPagesLoaded + 1,
        errors: {},
      };
    case api.ELO_LIST_FAILURE:
      return {
        ...state,
        errors: action.payload.response || { non_field_errors: action.payload.statusText },
      };
    default:
      return state;
  }
};
