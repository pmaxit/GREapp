'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Container, Content, Col, Grid, Row } from 'native-base';
import {Image} from 'react-native';

var ReactNative = require('react-native');
var { StyleSheet, Dimensions } = ReactNative;
var deviceHeight = Dimensions.get('window').height;

export default class SplashPage extends Component {

    componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {
            navigator.replace({
                id: 'login',
            });
        }, 1500);
    }
    render () {
        return (
    
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        
        backgroundColor: '#453F41',

        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        bottom: 0
      }}>
        
        <Image source={require('../../../images/logoweb.png')}
             />
      
      </View>
              
        );
    }
}
