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
    subTitle: PropsType.string.isRequired, // 副标题
    onCloseClick: PropsType.func.isRequired, // 关闭事件
    subTitleIsRichText: PropsType.bool, // 表示 副标题是否是 富文本类型
    richBeginIndex: PropsType.number, // 表示富文本开始位置
    richLength: PropsType.number, //  表示富文本长度
    imageType: PropsType.oneOf(['success', 'warning']).isRequired, // 图标类型
}
TopViewTypeImage.defaultProps = {
}


