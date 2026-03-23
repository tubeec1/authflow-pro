export let initialValue = {
  user: null,
  token: null,
  isValidToken: false,
  isLogin: false,
};
let authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isValidToken: true,
        isLogin: true,
      };
    case "LOGOUT":
      return { ...state, isLogin: false, token: null, isValidToken: false };
  }
};

export default authReducer;
