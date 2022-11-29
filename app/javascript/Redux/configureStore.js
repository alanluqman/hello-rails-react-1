// import { configureStore } from "@reduxjs/toolkit";

// import greetingReducer from "./greetingSlice";

// const store = configureStore({
//   reducer: {
//     greeting: greetingReducer,
//   },
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import greetingsReducer from "./greetings/greetings";

const rootReducer = combineReducers({ greetings: greetingsReducer });
const store = configureStore({ reducer: rootReducer });
export default store;