import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles'
import {banMainColor} from '../constValue/colorValue'
export default {

    render() {
        const {mainBtnText, secondaryBtnText, onMainBtnClick, onSecondaryBtnClick} = this.props
        return (
            <View style={styles.container}>

                {
                    secondaryBtnText ? <View style={styles.secondaryView}>
                        <TouchableOpacity style={styles.secondaryBtn} onPress={onSecondaryBtnClick}>
                            <Text numberOfLines={1} style={styles.secondaryBtnText}>{secondaryBtnText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.isBan} style={[styles.secondaryMainBtn, this.state.isBan ? {backgroundColor: banMainColor} : {}]} onPress={onMainBtnClick}>
                            <Text numberOfLines={1} style={styles.mainText}>{mainBtnText}</Text>
                        </TouchableOpacity>
                    </View>:  <TouchableOpacity disabled={this.state.isBan} style={[styles.mainBtn, this.state.isBan ? {backgroundColor: banMainColor} : {}]} onPress={onMainBtnClick}>
                        <Text numberOfLines={1} style={styles.mainText}>{mainBtnText}</Text>
                    </TouchableOpacity>

                }

            </View>
        )
    }
}
