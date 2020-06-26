import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage: storage
}; // persist-config

const persistedReducer = persistReducer(persistConfig, rootReducer); // per

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(logger))
)

export const persistor = persistStore(store);
