/** @format */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);


/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { ScreenRegistry } from './app/src/router';


const FirebaseAuthentication = () => (
  <ScreenRegistry />
)

AppRegistry.registerComponent(appName, () => FirebaseAuthentication);