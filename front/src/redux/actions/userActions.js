import axios from "axios";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    console.log(userData)
    const { data } = await axios.post(
      "http://localhost:5173/api/users/register",
      userData
    );

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error.response?.data?.message || "Error en el registro",
    });
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    const { data } = await axios.post("/api/users/login", credentials);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error.response?.data?.message || "Error en el inicio de sesión",
    });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
};
