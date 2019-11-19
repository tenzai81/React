import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h2>Hello</h2>
    </Provider>
  );
}

export default App;
