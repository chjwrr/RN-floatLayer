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
    mainColor,
    whiteColor
} from '../constValue/colorValue'
export default StyleSheet.create({

    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleView: {
        position: 'absolute',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 90 - 90 - 15 -15 - 20, // 最大宽度
        left: 90 + 15 + 10,
    },
    title: {
        fontSize: 16,
        color: titleColor,
        textAlign: 'center'
    },
    leftBtn: {
        marginLeft: 15,
        paddingVertical: 6,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whiteColor,
        borderWidth: 1,
        borderColor: mainColor
    },
    rightBtn: {
        marginRight: 15,
        paddingVertical: 6,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor,
        borderWidth: 1,
        borderColor: whiteColor
    },
    leftBtnText: {
        fontSize: 12,
        color: mainColor
    },
    rightBtnText: {
        fontSize: 12,
        color: whiteColor
    }

})