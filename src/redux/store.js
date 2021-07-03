import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts.reducer";

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export default store;
// ================================
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./RootReducer";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

// ===============================OLD

// import { createStore } from "redux";
// import rootReducer from "./RootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
