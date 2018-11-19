import React, {PureComponent} from 'react';
import {
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class PopListView extends PureComponent {

    constructor(props) {
        super(props)
        this.onScrollListItemClick = this.onScrollListItemClick.bind(this)
    }

    // item 点击
    onScrollListItemClick(index){
        this.props.onScrollListItemClick && this.props.onScrollListItemClick(index)
    }
    render() {
        return Render.render.call(this);
    }
}
PopListView.propsType = {
    scrollDataSource: PropsType.array.isRequired, // 数据源 字符串数组
    onScrollListItemClick: PropsType.func, // item点击
}
PopListView.defaultProps = {
    scrollDataSource: []
}


