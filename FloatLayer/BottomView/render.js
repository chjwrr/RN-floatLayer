import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles'

export default {

    render() {
        const {mainBtnText, secondaryBtnText, onMainBtnClick, onSecondaryBtnClick} = this.props
        return (
            <View style={styles.container}>


                {
                    secondaryBtnText ? <View style={styles.secondaryView}>
                        <TouchableOpacity style={styles.secondaryBtn} onPress={onSecondaryBtnClick}>
                            <Text style={styles.secondaryBtnText}>{secondaryBtnText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryMainBtn} onPress={onMainBtnClick}>
                            <Text style={styles.mainText}>{mainBtnText}</Text>
                        </TouchableOpacity>
                    </View>:  <TouchableOpacity style={styles.mainBtn} onPress={onMainBtnClick}>
                        <Text style={styles.mainText}>{mainBtnText}</Text>
                    </TouchableOpacity>

                }


            </View>
        )
    }
}
