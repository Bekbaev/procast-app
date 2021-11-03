import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";


const Main = () => <Provider store={store}>
        <App />
    </Provider>

registerRootComponent( Main);