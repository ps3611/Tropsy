export const SELECT_RANKINGS_VIEW = '@@setting/SELECT_RANKINGS_VIEW';

export const selectRankingsViewIndex = view => ({
  type: SELECT_RANKINGS_VIEW,
  payload: view,
});
