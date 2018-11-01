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
export default StyleSheet.create({
    container: {
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
        color: subTitleColor,
        marginTop: 10,
        lineHeight: 20
    },
    subRichTitle:{
        fontSize: 14,
        color: mainColor,
        marginTop: 10,
        lineHeight: 20
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center'
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