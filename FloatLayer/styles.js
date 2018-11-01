import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import {contentHorizontal, contenVertical} from "./constValue/floatLayerValue";

const {width, height} = Dimensions.get('window');
import {
    whiteColor,
    blackColor
} from './constValue/colorValue'
export default StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        height,
    },
    bg: {
        width,
        height,
    },
    animatedView: {
        position: 'absolute',
        width,
        height,
        backgroundColor: blackColor
    },
    layer: {
        position: 'absolute',
        width,
        backgroundColor: whiteColor,
        left: 0,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    contentView: {
        paddingHorizontal: contentHorizontal,
        paddingVertical: contenVertical
    }
})