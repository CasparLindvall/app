/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

//import LineChartScreen from 'LineChartScreen';
var LineChartScreen = require('./src/LineChartScreen');


export default class graf extends Component {
  render() {
    return (
        <LineChartScreen>
        </LineChartScreen>
      );
   }
 }

AppRegistry.registerComponent('graf', () => graf);
