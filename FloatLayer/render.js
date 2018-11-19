import React from 'react';

import {
    TouchableOpacity,
    Animated,
    Modal,
} from 'react-native';

import styles from './styles'
import PopTopLayer from './PopLayer'
import FloatLayerType from './FloatLayerType'

export default {

    render() {

        return (
            <React.Fragment>
            {
                FloatLayerType.isValidityType(this.props.floatLayerType) && <Modal animationType="fade"
                                                                    transparent={true}
                                                                    visible={this.state.isShowModal}
                                                                    onRequestClose={this.onRequestClose} >

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
            }
            </React.Fragment>
        )
    }
}
