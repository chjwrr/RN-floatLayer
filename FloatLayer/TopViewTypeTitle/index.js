import React, {PureComponent} from 'react';
import {
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class TopViewTypeTitle extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return Render.render.call(this);
    }
}
TopViewTypeTitle.propsType = {
    title: PropsType.string.isRequired, // 标题
    onCloseClick: PropsType.func.isRequired, // 关闭事件
};
TopViewTypeTitle.defaultProps = {
    title: '请填写"title"',
};


