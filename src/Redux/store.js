import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
// import { legacy_createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { reducer } from "./reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// // Checking if it's the first load
// const isFirstLoad = !localStorage.getItem("persist:persist-key");

// let store;
// let persistor;

// if (!isFirstLoad) {
//   // If not the first load, apply persistence
//   const persistConfig = {
//     key: "persist-key",
//     storage,
//   };

//   const persistedReducer = persistReducer(persistConfig, reducer);

//   store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
//   persistor = persistStore(store, null, () => {
//     // On rehydration complete
//     console.log("Rehydration complete");
//   });
// } else {
//   // If it's the first load, create a store without persistence
//   store = legacy_createStore(reducer, applyMiddleware(thunk));
// }

// export { store, persistor };
