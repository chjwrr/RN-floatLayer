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
        height: bottomHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 16,
        color: whiteColor
    },
    secondaryView: {
        marginHorizontal: bottomHorizontal,
        flex: 1,
        flexDirection: 'row'
    },
    secondaryBtn: {
        borderWidth: 1,
        borderColor: mainColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: whiteColor
    },
    secondaryMainBtn: {
        marginLeft: bottomSpaceWidth ,
        flex: 1,
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondaryBtnText:{
        color: mainColor,
        fontSize: 16,
    }

})