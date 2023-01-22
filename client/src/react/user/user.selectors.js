import { createSelector } from "reselect";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

export const selectError = createSelector(
    [selectUser],
    user => user.error
);

export const selectUserLogedIn = createSelector(
    [selectUser],
    user => user.message
);