import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import styles from './styles'
const CloseImage = require('../image/floatLayer_close.png')

export default {

    render() {
        const {title, onCloseClick} = this.props

        let showTitle = title
        if (title.length > 10){
            showTitle = title.substr(0, 10) + '...'
        }

        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.space}/>
                    <Text numberOfLines={1} style={styles.title}>{showTitle}</Text>
                    <TouchableOpacity style={styles.close} onPress={onCloseClick}>
                        <Image style={styles.closeImg} source={CloseImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
            </View>
        )
    }
}
