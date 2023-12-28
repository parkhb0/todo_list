import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import rootRouter from "./router/rooter";
import { Provider } from "react-redux";
import store from "./store/them";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rootRouter} />
    </Provider>
  </React.StrictMode>
);
