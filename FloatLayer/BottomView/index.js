import React, {PureComponent} from 'react';
import {
    DeviceEventEmitter
} from 'react-native'
import Render from './render'
import PropsType from 'prop-types'

export default class BottomView extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isBan: this.props.isBanMainBtn
        };

        this.banMainBtn = this.banMainBtn.bind(this);
        this.allowMainBtn = this.allowMainBtn.bind(this)
    }

    componentDidMount() {
        this.ban = DeviceEventEmitter.addListener('banMainBtn',this.banMainBtn)  ;
        this.allow = DeviceEventEmitter.addListener('allowMainBtn',this.allowMainBtn)


        if (this.props.isBanMainBtn){
            // 假如默认是禁止的
            if (this.props.isAutoAllowMainBtn){
                // 允许自动解禁
                setTimeout(this.allowMainBtn,5000)
            }
        }
    }

    componentWillUnmount() {
        this.ban && this.ban.remove();
        this.allow && this.allow.remove()
    }

    // 禁用主操作按钮
    banMainBtn(){

        if (this.state.isBan) return;

        return this.setState({
            isBan: true
        })

    }

    // 启用主操作按钮
    allowMainBtn(){
        if (!this.state.isBan) return;

        this.setState({
            isBan: false
        })
    }

    render() {
        return Render.render.call(this);
    }
}
BottomView.propsType = {
    mainBtnText: PropsType.string.isRequired, // 主操作标题
    secondaryBtnText: PropsType.string, // 次操作标题
    onMainBtnClick: PropsType.func, // 主操作
    onSecondaryBtnClick: PropsType.func, // 次操作

    isBanMainBtn: PropsType.bool, // 是否禁用主操作按钮
    isAutoAllowMainBtn: PropsType.bool, //  isBanMainBtn = true 的情况下，是否自动的解禁主操作按钮
};
BottomView.defaultProps = {
    mainBtnText: '请填写"mainBtnText"',
    secondaryBtnText: '请填写"secondaryBtnText"',
    isBanMainBtn: false,
    isAutoAllowMainBtn: true
};


