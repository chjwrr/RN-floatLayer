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
                {this.props.scrollDataSource.map((item,index)=>{
                    return <TouchableOpacity key={item.title} onPress={this.onScrollListItemClick.bind(this,index)}>
                        <Text style={styles.item} >{item.title}</Text>
                        <View style={styles.line}/>
                    </TouchableOpacity>
                })}
            </View>
        )
    }
}
