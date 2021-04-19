// External imports
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Internal imports
import App from './App';
import { configureNotifications } from './helpers/configureNotifications'

configureNotifications()

AppRegistry.registerComponent(appName, () => App);
