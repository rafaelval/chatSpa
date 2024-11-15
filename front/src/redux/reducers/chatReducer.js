const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES_REQUEST":
      return { ...state, loading: true };

    case "FETCH_MESSAGES_SUCCESS":
      return { ...state, loading: false, messages: action.payload };

    case "FETCH_MESSAGES_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };

    default:
      return state;
  }
};

export default chatReducer;
