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
import LiveUpdating from "react-native-charts-wrapper/Example/app/LiveUpdateChartScreen";

//import LineChartScreen from 'LineChartScreen';
var Line = require('./src/LineChartScreen');
var Zero = require('./src/ZeroLineChartScreen');
var BarP = require('./src/barMainP');
var BarK = require('./src/barMainK');
//import Live from './src/LiveUpdateChartScreen';
//var Live = require('./src/LiveUpdateChartScreen');
import Page from './src/page';

export default class graf extends Component {
  render() {
    return (
    <Page/>
    );
   }
 }


AppRegistry.registerComponent('graf', () => graf);
