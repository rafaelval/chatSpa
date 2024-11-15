import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Importar los reducers
import userReducer from "./reducers/userReducer";
import chatReducer from "./reducers/chatReducer";

// Combinar los reducers
const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

// Crear el store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
