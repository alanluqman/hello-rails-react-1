// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Provider } from "react-redux";
// import Greeting from "./components/Greeting";
// import store from "./Redux/configStore";

// function App() {
//   return (
//     <React.StrictMode>
//       <h1>Hello World!</h1>
//       <Link to="/greeting">Go page details</Link>
//       <Provider store={store}>
//         <Router>
//           <Routes>
//             <Route path="/greeting" element={<Greeting />} />
//           </Routes>
//         </Router>
//       </Provider>
//     </React.StrictMode>
//   );
// }

// export default App;



import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/greeting">Go page details</Link>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </>
  );
};

export default App;