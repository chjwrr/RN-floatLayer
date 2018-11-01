import React, {PureComponent} from 'react';
import {
    BackAndroid,
    Platform,
    Animated,
} from 'react-native'
import Render from './render'
import {animatedTime, animatedOpacity} from './constValue/floatLayerValue'
import PropsType from 'prop-types'

export default class FloatLayer extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            fadeOpacity: new Animated.Value(0), //背景透明度设置初始值,
            isHiddenPopLayer: false, // 是否隐藏弹框
        };

        this.beginAnimal = this.beginAnimal.bind(this)
        this.hiddenAnimal = this.hiddenAnimal.bind(this)
        this.onRequestClose = this.onRequestClose.bind(this)
        this.closeAction = this.closeAction.bind(this)
        this.onMainBtnClick = this.onMainBtnClick.bind(this)
        this.onSecondaryBtnClick = this.onSecondaryBtnClick.bind(this)
        this.onBackAndroid = this.onBackAndroid.bind(this)
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
        this.beginAnimal()

    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    // 开始透明动画
    beginAnimal(){
        Animated.timing(
            this.state.fadeOpacity,
            {
                toValue: animatedOpacity,
                duration: animatedTime
            }
        ).start()
    }

    // 结束透明动画
    hiddenAnimal(){
        Animated.timing(
            this.state.fadeOpacity,
            {
                toValue: 0,
                duration: animatedTime
            }
        ).start()
    }

    // 本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
    onRequestClose(){
    }

    // 点击背景，叉号，关闭页面
    closeAction(){
        this.hiddenAnimal();

        this.setState({
            isHiddenPopLayer: true
        });

        // 动画结束以后再回调方法，移除组件
        setTimeout(()=>{
            this.props.onCloseClick && this.props.onCloseClick()
        },animatedTime)
    }

    // 主要操作
    onMainBtnClick(){
        this.closeAction()
        this.props.onMainBtnClick && this.props.onMainBtnClick()
    }

    // 次要操作
    onSecondaryBtnClick(){
        this.closeAction()
        this.props.onSecondaryBtnClick && this.props.onSecondaryBtnClick()
    }

    /**
     * android  点击物理返回键时处理
     */
    onBackAndroid = () => {
        // 隐藏弹框
        this.closeAction()
        return true;
    }

    render() {
        return Render.render.call(this);
    }

}

FloatLayer.propsType = {

    /*
    * 弹框类型 （必填）
    *
    * TYPE_TITLE            只有标题
    * TYPE_IMAGE            图标，标题，副标题
    * TYPE_TITLE_BUTTON     标题，标题左右按钮
    * TYPE_TITLE_SCROLL     标题，内部滑动组件
    *
    * */
    floatLayerType: PropsType.oneOf(['TYPE_TITLE', 'TYPE_IMAGE', 'TYPE_TITLE_BUTTON', 'TYPE_TITLE_SCROLL']).isRequired,

    /*
    * 公用属性 （必填）
    * */
    title: PropsType.string.isRequired, // 标题
    onCloseClick: PropsType.func.isRequired, // 关闭事件

    /*
    * TYPE_TITLE_SCROLL 没有按钮操作,不传以下属性，其他类型按需传入
    * */
    mainBtnText: PropsType.string, // 主操作文本
    secondaryBtnText: PropsType.string, // 次操作文本, 不设置次属性则默认只有一个主操作
    onMainBtnClick: PropsType.func, // 主操作事件
    onSecondaryBtnClick: PropsType.func, // 次操作事件

    /*
    * TYPE_IMAGE 对应所填写的属性
    * */
    subTitle: PropsType.string, // 副标题
    subTitleIsRichText: PropsType.bool, //  副标题是否是 富文本类型
    richBeginIndex: PropsType.number, // subTitleIsRichText 为 true 时,则需传入此参数 表示富文本开始位置
    richLength: PropsType.number, // subTitleIsRichText 为 true 时,则需传入此参数 表示富文本长度
    imageType: PropsType.oneOf(['success', 'warning']), // 图标类型 （必填）

    /*
    * TYPE_TITLE_SCROLL 对应所填写的属性 （必填）
    * */
    scrollDataSource: PropsType.array, // 滚动列表数组 {title: ''，...}
    onScrollListItemClick: PropsType.func, // 滚动列表item点击, 带有一个 index 的参数，标记点击了第几个item

}
FloatLayer.defaultProps = {

}

