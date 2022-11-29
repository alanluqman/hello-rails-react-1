import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Greeting from "./Greeting";
import store from "../Redux/configStore";

function App() {
  return (
    <React.StrictMode>
      <h1>Hello world</h1>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
