import React from 'react';

import {
    TouchableOpacity,
    Animated,
    Modal,
    View
} from 'react-native';

import styles from './styles'
import PopTopLayer from './PopLayer'
export default {


    render() {

        return (
            <Modal animationType="fade"
                   transparent={true}
                   visible={true}
                   onRequestClose={this.onRequestClose}
            >
                <TouchableOpacity activeOpacity={1} style={styles.bg} onPress={this.closeAction}>
                    <Animated.View style={[styles.animatedView,{opacity: this.state.fadeOpacity}]}/>
                </TouchableOpacity>


                <PopTopLayer {...this.props}
                             onCloseClick={this.closeAction}
                             isHiddenPopLayer={this.state.isHiddenPopLayer}
                             onMainBtnClick={this.onMainBtnClick}
                             onSecondaryBtnClick={this.onSecondaryBtnClick}
                >
                    {this.props.children}
                </PopTopLayer>

            </Modal>

        )
    }
}
