import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import reducer from "./root-reducer";

let middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV !== "production") {
  middlewares = [...middlewares, logger];
}
const composeEnhancers =
  window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose; // tslint:disable-line
const configureStore = composeEnhancers(applyMiddleware(...middlewares))(
  createStore
);

const config = {
  key: "root",
  storage
};

const combinedReducer = persistReducer(config, reducer);
const store = configureStore(combinedReducer);
const persistor = persistStore(store);

export { persistor, store };
