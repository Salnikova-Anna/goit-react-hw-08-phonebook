export const authSelector = state => state.auth.token;
export const profileSelector = state => state.auth.profile;
export const refreshSelector = state => state.auth.isRefreshing;
export const loggedInSelector = state => state.auth.isLoggedIn;
