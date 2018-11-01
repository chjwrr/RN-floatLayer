import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import { topHorizontal } from '../constValue/floatLayerValue'
import {
    lineColor,
    scrollItemTitleColor
} from '../constValue/colorValue'
export default StyleSheet.create({

    container: {
    },
    item: {
        lineHeight: 54,
        marginHorizontal: 16,
        color: scrollItemTitleColor,
        fontSize: 16
    },
    line: {
        height: 1,
        width,
        backgroundColor: lineColor
    },

})