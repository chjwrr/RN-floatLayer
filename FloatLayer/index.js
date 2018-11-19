import React, {PureComponent} from 'react';
import {
    BackAndroid,
    Platform,
    Animated,
    DeviceEventEmitter
} from 'react-native'
import Render from './render'
import {animatedTime, animatedOpacity} from './constValue/floatLayerValue'
import PropsType from 'prop-types'
import FloatLayerType from './FloatLayerType'
class FloatLayer extends PureComponent {

    /*
        public function
    */

    // 显示浮层
    showFloatLayer(){
        this.setState({
            isShowModal: true,
            isHiddenPopLayer: false
        },()=>{
            this.beginAnimal()
        })
    }

    // 禁止主操作按钮
    banMainBtn(){
        DeviceEventEmitter.emit('banMainBtn')
    }

    // 启用主操作按钮
    allowMainBtn(){
        DeviceEventEmitter.emit('allowMainBtn')
    }


    constructor(props) {
        super(props)

        this.state = {
            fadeOpacity: new Animated.Value(0), //背景透明度设置初始值,
            isHiddenPopLayer: false, // 是否隐藏弹框
            isShowModal: false
        };

        this.beginAnimal = this.beginAnimal.bind(this)
        this.hiddenAnimal = this.hiddenAnimal.bind(this)
        this.onRequestClose = this.onRequestClose.bind(this)
        this.closeAction = this.closeAction.bind(this)
        this.onMainBtnClick = this.onMainBtnClick.bind(this)
        this.onSecondaryBtnClick = this.onSecondaryBtnClick.bind(this)
        this.onBackAndroid = this.onBackAndroid.bind(this)
        this.showFloatLayer = this.showFloatLayer.bind(this)
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
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
            this.setState({
                isShowModal: false
            });
            // this.props.onCloseClick && this.props.onCloseClick()
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
    onBackAndroid() {
        // 隐藏弹框
        this.closeAction()
        return true;
    }

    render() {
        return Render.render.call(this);
    }

}

FloatLayer.publicFunction = {
    showFloatLayer: PropsType.func, // 显示浮层
    banMainBtn: PropsType.func, // 禁止主操作按钮
    allowMainBtn: PropsType.func, // 启用主操作按钮
};

FloatLayer.propsType = {

    /*
    * 弹框类型 （必填）
    * 需要import FloatLayerType
    *
    * FloatLayerType.TYPE_TITLE            只有标题
    * FloatLayerType.TYPE_IMAGE            图标，标题，副标题
    * FloatLayerType.TYPE_TITLE_BUTTON     标题，标题左右按钮
    * FloatLayerType.TYPE_TITLE_SCROLL     标题，内部滑动组件
    *
    * */
    floatLayerType: PropsType.string.isRequired,

    /*
    * 公用属性 （必填）
    * */
    title: PropsType.string.isRequired, // 标题

    /*
    *  ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
    * ️FloatLayerType.TYPE_TITLE_SCROLL 没有按钮操作,不传以下属性，其他类型按需传入
    * */
    mainBtnText: PropsType.string, // 主操作文本
    secondaryBtnText: PropsType.string, // 次操作文本, 不设置次属性则默认只有一个主操作
    onMainBtnClick: PropsType.func, // 主操作事件
    onSecondaryBtnClick: PropsType.func, // 次操作事件

    isBanMainBtn: PropsType.bool, // 是否禁止主操作按钮。默认不禁止
    isAutoAllowMainBtn: PropsType.bool, //  isBanMainBtn = true 的情况下，是否自动的解禁主操作按钮. 5秒以后自动解禁

    /*
    * FloatLayerType.TYPE_IMAGE 对应所填写的属性
    * */
    subTitles: PropsType.array, // 副标题数组 [{content: '文字内容:文字必填',color: '文字的颜色:用于不同文字不同颜色的场景，默认可不传，默认颜色 #999999'}]

    imageType: PropsType.oneOf(['success', 'warning']), // 图标类型 （必填）

    /*
    * FloatLayerType.TYPE_TITLE_SCROLL 对应所填写的属性 （必填）
    * */
    scrollDataSource: PropsType.array, // 滚动列表数组 {""，...} 标题数组
    onScrollListItemClick: PropsType.func, // 滚动列表item点击, 带有一个 index 的参数，标记点击了第几个item

};
FloatLayer.defaultProps = {
    floatLayerType :FloatLayerType.TYPE_TITLE,
};

export default FloatLayer

/*
* 用法
  <FloatLayer ref={(ref)=>this.floatLayer = ref} floatLayerType={FloatLayerType.TYPE_TITLE} ...props>
      <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
      ...customView...
  </FloatLayer>

  this.floatLayer.showFloatLayer()
* */