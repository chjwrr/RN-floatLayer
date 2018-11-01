import React, {PureComponent} from 'react';
import {
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class TopViewTypeTitleButton extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return Render.render.call(this);
    }
}
TopViewTypeTitleButton.propsType = {
    title: PropsType.string.isRequired, // 标题
    onMainBtnClick: PropsType.func, // 确定操作
    onSecondaryBtnClick: PropsType.func, // 取消操作
    mainBtnText: PropsType.string.isRequired, // 主操作标题
    secondaryBtnText: PropsType.string, // 次操作标题
}
TopViewTypeTitleButton.defaultProps = {
}


