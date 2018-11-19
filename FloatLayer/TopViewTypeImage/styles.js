import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

import {
    mainColor,
    titleColor,
    subTitleColor
} from '../constValue/colorValue'
import {
    topHeightTypeImage
} from '../constValue/floatLayerValue'

export default StyleSheet.create({
    container: {
        height: topHeightTypeImage
    },
    closeView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    close: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: titleColor,
        marginTop: 16,
        lineHeight: 20
    },
    subTitle: {
        fontSize: 14,
        marginTop: 10,
        lineHeight: 20
    },
    subTitleView:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        textAlign: 'center',
        marginTop: 10
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeImg: {
        width: 16,
        height: 16
    },
    iconImg: {
        width: 35,
        height: 35
    }
})