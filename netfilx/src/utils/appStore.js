import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import moviesReducer from "./moviesSlice";
// import gptReducer from "./gptSlice";
// import configReducer from "./configSlice";

// for a successful creation of a slice we can verify at react devtools extension in chrome, select "state" and a slice with a null value initially is displayed
const appStore = configureStore({
  reducer: {
    user: userReducer,
    
  },
});

export default appStore;