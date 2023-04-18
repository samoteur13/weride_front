/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorldApp from './HelloWorld';
import HelloProps from './HelloProps';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloProps);
