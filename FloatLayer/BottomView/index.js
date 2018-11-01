import React, {PureComponent} from 'react';
import {
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class BottomView extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return Render.render.call(this);
    }
}
BottomView.propsType = {
    mainBtnText: PropsType.string.isRequired, // 主操作标题
    secondaryBtnText: PropsType.string, // 次操作标题
    onMainBtnClick: PropsType.func, // 主操作
    onSecondaryBtnClick: PropsType.func // 次操作
}
BottomView.defaultProps = {

}


