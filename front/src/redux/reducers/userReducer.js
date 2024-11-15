const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
    case "USER_LOGIN_REQUEST":
      return { ...state, loading: true };

    case "USER_REGISTER_SUCCESS":
    case "USER_LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, loading: false, user: action.payload };

    case "USER_REGISTER_FAIL":
    case "USER_LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "USER_LOGOUT":
      localStorage.removeItem("user");
      return { user: null, loading: false, error: null };

    default:
      return state;
  }
};

export default userReducer;
