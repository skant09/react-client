import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./app/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { persistor, store } from "./store";

const AppContainer = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
