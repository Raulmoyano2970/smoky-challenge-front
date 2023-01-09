import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mainReducer from './redux/reducers/mainReducer';

const reduxStore = configureStore({ reducer: mainReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>
);
