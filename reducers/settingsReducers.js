import * as settings from '../actions/settingsAction.js';

const initialState = {
  selectedRankingsView: 'ATP',
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case settings.SELECT_RANKINGS_VIEW:
      return {
        ...state,
        selectedRankingsView: action.payload,
      };
    default:
      return state;
  }
};
