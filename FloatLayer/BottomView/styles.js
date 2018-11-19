import React from 'react';
import {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';

const {width, height} = Dimensions.get('window');
import {
    bottomHorizontal,
    bottomHeight,
    bottomBottom,
    bottomSpaceWidth,
} from '../constValue/floatLayerValue'

import {
    mainColor,
    whiteColor
} from '../constValue/colorValue'

export default StyleSheet.create({

    container: {
        height: bottomHeight,
        width,
        position: 'absolute',
        left: 0,
        bottom: bottomBottom,
    },
    mainBtn: {
        marginHorizontal: bottomHorizontal,
        backgroundColor: mainColor,
        height: bottomHeight - 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 16,
        color: whiteColor
    },
    secondaryView: {
        marginHorizontal: bottomHorizontal,
        flexDirection: 'row'
    },
    secondaryBtn: {
        borderWidth: 1,
        borderColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whiteColor,
        height: bottomHeight - 10,
        flex: 1
    },
    secondaryMainBtn: {
        marginLeft: bottomSpaceWidth ,
        height: bottomHeight - 10,
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    secondaryBtnText:{
        color: mainColor,
        fontSize: 16,
    }

})