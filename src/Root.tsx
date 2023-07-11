import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}
