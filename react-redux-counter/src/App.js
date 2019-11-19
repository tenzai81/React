import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterDisplay from "./components/CounterDisplay";
import IncrementButton from "./components/IncrementButton";
import ResetButton from "./components/ResetButton";
function App() {
  return (
    <Provider store={store}>
      <CounterDisplay />
      <IncrementButton />
      <ResetButton />
    </Provider>
  );
}

export default App;
