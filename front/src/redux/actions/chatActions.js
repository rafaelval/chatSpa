import axios from "axios";

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_MESSAGES_REQUEST" });

    const { data } = await axios.get(`/api/messages/${chatId}`);

    dispatch({ type: "FETCH_MESSAGES_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "FETCH_MESSAGES_FAIL",
      payload: error.response?.data?.message || "Error al cargar mensajes",
    });
  }
};

export const sendMessage = (messageData) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/messages", messageData);

    dispatch({ type: "ADD_MESSAGE", payload: data });
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
  }
};
