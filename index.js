/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HelloWorldApp from './TutorialComponants/HelloWorld';
import HelloProps from './TutorialComponants/HelloProps';
import App from './TutorialComponants/HelloClassesButton'
import AppFunc from './TutorialComponants/HelloFunctionButton';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppFunc);
