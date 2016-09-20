import {StyleSheet} from 'react-native';
var styles = StyleSheet.create({
    container   : {
        backgroundColor: 'transparent',
        margin:10,
        overflow:'hidden',

    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#FFFFFF',
        fontWeight:'bold'
    },
    content       : {
        flex    : 1,
        padding : 3,
        color   :'#F2F2F2',
        fontWeight:'normal'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0,

    }
});

export default styles;
