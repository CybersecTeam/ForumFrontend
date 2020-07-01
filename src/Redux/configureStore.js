import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

// In this code, we pass our reducers to the Redux createStore
// function, which returns a store object.
// We then pass this object to the react-redux Provider component (see index.js),
// which is rendered at the top of our component tree.
// This ensures that any time we connect to Redux in our app via react-redux connect,
// the store is available to our components.

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
