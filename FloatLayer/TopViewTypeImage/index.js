import React, {PureComponent} from 'react';
import {
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class TopViewTypeImage extends PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        return Render.render.call(this);
    }
}
TopViewTypeImage.propsType = {
    title: PropsType.string.isRequired, // 标题
    subTitles: PropsType.array, // 副标题
    onCloseClick: PropsType.func.isRequired, // 关闭事件
    imageType: PropsType.oneOf(['success', 'warning']).isRequired, // 图标类型
};
TopViewTypeImage.defaultProps = {
    title: '请填写"title"',
    subTitles: [],
    imageType: 'warning'
};


