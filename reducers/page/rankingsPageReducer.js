import * as api from '../../actions/apiActions.js';

const initialState = {
  loading: false,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case api.ATP_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case api.ATP_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case api.ATP_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.response || { 'non_field_errors': action.payload.statusText },
      };
    default:
      return state;
  }
};