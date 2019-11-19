import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  return (
    <Provider store={store}>
      <h2>
        <CounterDisplay />
      </h2>
    </Provider>
  );
}

export default App;
