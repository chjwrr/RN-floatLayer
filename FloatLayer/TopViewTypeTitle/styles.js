import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import { topHorizontal } from '../constValue/floatLayerValue'
import {
    titleColor,
    lineColor
} from '../constValue/colorValue'
export default StyleSheet.create({

    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    close: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeImg: {
        width: 16,
        height: 16
    },
    space: {
        width: 44,
        height: 44,
    },
    title: {
        fontSize: 16,
        color: titleColor
    },
    line: {
        height: 1,
        width,
        backgroundColor: lineColor
    }
})