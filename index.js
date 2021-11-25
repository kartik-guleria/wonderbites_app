/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BottomViewScreen from './src/delivery/screens/BottomViewScreen';
AppRegistry.registerComponent(appName, () => BottomViewScreen);
