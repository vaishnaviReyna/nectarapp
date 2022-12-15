import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store/index';

const store = configureStore();

const ReduxTutorial = () =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent(appName, () => ReduxTutorial);
