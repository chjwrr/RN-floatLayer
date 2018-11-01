import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import styles from './styles'

const CloseImage = require('../image/floatLayer_close.png')
const SuccessImage = require('../image/floatLayer_Success.png')
const WarningImage = require('../image/floatLayer_Warning.png')

export default {

    render() {
        const {title, subTitle, onCloseClick, subTitleIsRichText, richBeginIndex, richLength, imageType} = this.props

        let beginText = subTitle;
        let endText = '';
        let richText = '';

        if (subTitleIsRichText){
            if (richBeginIndex + richLength <= subTitle.length){
                beginText = subTitle.substr(0, richBeginIndex)
                richText = subTitle.substr(richBeginIndex, richLength)
                endText = subTitle.substr(richBeginIndex + richLength, subTitle.length - (richBeginIndex + richLength))
            }
        }

        let richTextComponent = subTitleIsRichText  ? <Text numberOfLines={1} style={styles.subTitle}>
                {beginText}
                <Text style={styles.subRichTitle}>{richText}</Text>
                {endText}
            </Text> :
            <Text numberOfLines={1} style={styles.subTitle}>{subTitle}</Text>

        return (
            <View style={styles.container}>
                <View style={styles.closeView}>
                    <TouchableOpacity style={styles.close} onPress={onCloseClick}>
                        <Image style={styles.closeImg} source={CloseImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <Image style={styles.iconImg} source={imageType === 'success' ? SuccessImage : WarningImage}/>
                    <Text style={styles.title}>{title}</Text>

                    { richTextComponent }

                </View>

            </View>
        )
    }
}
