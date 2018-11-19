import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

const {width} = Dimensions.get('window');
import {
    contenVertical,
} from '../constValue/floatLayerValue'
import {
    whiteColor
} from '../constValue/colorValue'
export default StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        backgroundColor: 'white',
        left: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    contentView: {
        paddingVertical: contenVertical,
        // backgroundColor: 'red'
    },
    bg:{
        position: 'absolute',
        bottom: 0,
        height: 55,
        width,
        backgroundColor: 'rgba(255,255,255,0.7)'
    },
    bgImg: {
        position: 'absolute',
        bottom: 0,
        height: 55,
        width
    }
})