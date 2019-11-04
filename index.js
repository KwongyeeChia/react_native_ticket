/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import RootScene from './src/RootScene';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RootScene);
