/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

//import LineChartScreen from 'LineChartScreen';
var Line = require('./src/LineChartScreen');
var Zero = require('./src/ZeroLineChartScreen');
import Live from './src/LiveUpdateChartScreen';
//var Live = require('./src/LiveUpdateChartScreen');

export default class graf extends Component {
  render() {
    return (
        <Live>
        </Live>
      );
   }
 }

AppRegistry.registerComponent('graf', () => graf);
