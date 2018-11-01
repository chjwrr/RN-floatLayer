import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles'

export default {

    render() {
        const {mainBtnText, secondaryBtnText, onMainBtnClick, onSecondaryBtnClick, title} = this.props

        let showTitle = title
        if (title.length > 10){
            showTitle = title.substr(0, 10) + '...'
        }

        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.leftBtn} onPress={onSecondaryBtnClick}>
                        <Text style={styles.leftBtnText}>{secondaryBtnText}</Text>
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={styles.title}>{showTitle}</Text>
                    <TouchableOpacity style={styles.rightBtn} onPress={onMainBtnClick}>
                        <Text style={styles.rightBtnText}>{mainBtnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
