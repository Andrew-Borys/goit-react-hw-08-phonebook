const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsRefreshingCurrent = state => state.auth.isRefreshingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingCurrent,
};

export default authSelectors;
