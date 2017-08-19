import  {AppRegistry} from 'react-native';
import App from './src/app';

{/* This app pushes to app.js file so both index.ios.js and 
    index.android.js so can have all code in one file. 
*/}
AppRegistry.registerComponent('auth', () => App);

