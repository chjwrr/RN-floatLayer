import React from 'react';

import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import styles from './styles'

export default {

    render() {
        return (
            <View style={styles.container}>
                {this.props.scrollDataSource && this.props.scrollDataSource.map((item,index)=>{
                    return <TouchableOpacity key={index} onPress={this.onScrollListItemClick.bind(this,index)}>
                        <Text numberOfLines={1} style={styles.item} >{item}</Text>
                        <View style={styles.line}/>
                    </TouchableOpacity>
                })}
            </View>
        )
    }
}
