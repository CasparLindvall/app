/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React,{Component} from 'react'
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = ReactNative;


//var ScrollableTabView = require('react-native-scrollable-tab-view');
//var Login = require('./src/pages/Login');
var MainPage = require('./src/pages/MainPage');
var Tabs = require('./src/pages/Tabs');

class appTest extends Component {
    render() {
        return (
        <Tabs/>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('appTest', () => appTest);
