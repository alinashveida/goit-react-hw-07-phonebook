// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./reducer";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from "redux-persist/lib/storage";
//--------------toolkit
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import { contactsApi } from "./slice";
import { setupListeners } from "@reduxjs/toolkit/query";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: "filter",
// };

// const middleware = [
//   ...getDefaultMiddleware({
//   //   serializableCheck: {
//   //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   //   },
//   // }),
//   logger,
// ]

const middleware = [...getDefaultMiddleware(), logger];
// ,contactsApi.middleware]

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, reducer),
// });

const rootReducer = combineReducers({
  contacts: reducer,
  //[contactsApi.reducerPath]: contactsApi.reducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);
//setupListeners(store.dispatch)

export default { store };

// export default { store, persistor };

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//     [todoApi.reducerPath]: todoApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => [
//     ...getDefaultMiddleware(),
//     pokemonApi.middleware,
//     todoApi.middleware,
//   ],
// })

//------------------------------------redux

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: 'filter',
// }

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, reducer),
// })

// const store = createStore(rootReducer, composeWithDevTools())

// const persistor = persistStore(store)

// export default { store, persistor }
