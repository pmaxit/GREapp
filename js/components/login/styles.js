
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        
        backgroundColor: '#453F41',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'stretch'
    },
    shadow: {
        flex: 10,
        width: null,
        height: null,
        backgroundColor: 'transparent',
        resizeMode: 'contain',
        
        marginTop: deviceHeight/5.75
    },
    bg: {
        flex: 1,
        marginTop: deviceHeight/4.75,
        backgroundColor: '#453F41',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0
    },
    input: {
        marginBottom: 20
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center'
    }
});
