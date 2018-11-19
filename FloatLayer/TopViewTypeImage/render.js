import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import styles from './styles'
import {
    subTitleColor
} from '../constValue/colorValue'

const CloseImage = require('../image/floatLayer_close.png')
const SuccessImage = require('../image/floatLayer_Success.png')
const WarningImage = require('../image/floatLayer_Warning.png')

export default {

    render() {
        const {title, subTitles, onCloseClick, imageType} = this.props

        return (
            <View style={styles.container}>
                <View style={styles.closeView}>
                    <TouchableOpacity style={styles.close} onPress={onCloseClick}>
                        <Image style={styles.closeImg} source={CloseImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <Image style={styles.iconImg} source={imageType === 'success' ? SuccessImage : WarningImage}/>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>

                    <Text numberOfLines={1} style={styles.subTitleView}>
                        {
                            subTitles && subTitles.map((item, index)=>{
                                return <Text key={index} style={[styles.subTitle,{color: item.color || subTitleColor}]}>
                                    {item.content}
                                </Text>
                            })
                        }
                    </Text>
                </View>

            </View>
        )
    }
}
