import * as settings from '../actions/settingsAction';

const initialState = {
  selectedRankingsViewIndex: 0,
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case settings.SELECT_RANKINGS_VIEW:
      return {
        ...state,
        selectedRankingsViewIndex: action.payload,
      };
    default:
      return state;
  }
};
