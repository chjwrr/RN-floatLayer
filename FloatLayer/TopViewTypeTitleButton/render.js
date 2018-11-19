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

        let leftTitle = secondaryBtnText
        if (leftTitle.length > 4){
            leftTitle = secondaryBtnText.substr(0, 4) + '...'
        }

        let rightTitle = mainBtnText
        if (rightTitle.length > 4){
            rightTitle = mainBtnText.substr(0, 4) + '...'
        }

        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.leftBtn} onPress={onSecondaryBtnClick}>
                        <Text numberOfLines={1} style={styles.leftBtnText}>{leftTitle}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rightBtn} onPress={onMainBtnClick}>
                        <Text numberOfLines={1} style={styles.rightBtnText}>{rightTitle}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleView}>
                    <Text numberOfLines={1} style={styles.title}>{showTitle}</Text>
                </View>
            </View>
        )
    }
}
