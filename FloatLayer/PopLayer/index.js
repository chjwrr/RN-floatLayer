import React, {PureComponent} from 'react';
import {
    Animated,
    Dimensions,
} from 'react-native'
import Render from './render'
import { animatedTime } from '../constValue/floatLayerValue'
import {
    topHeightTypeTitle,
    topHeightTypeImage,
    contenVertical,
    bottomHeight,
    bottomBottom,
    layerMaxHeight,
    layerMinHeight,
    listItemHeight,
    listItemMaxCount
} from '../constValue/floatLayerValue'
const screenHeight = Dimensions.get('window').height;

export default class PopLayer extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            popTop: new Animated.Value(screenHeight), //设置初始值
            popLayHeight: 0, // 默认内容高度
            scrollEnabled: false, // 滚动视图是否可以滚动，超过最大值可以滚动
            contentHeight: 0, // 内容组件高度，也就是scrollView的高度
            isShowOpacityBg: false, // 底部半透明遮罩层 this.props.floatLayerType === 'TYPE_TITLE_SCROLL'且 数据个数大于5时才使用到此属性
        };

        let contentMaxHeight; // 内容组件的最大高度
        let isBeginAnimated; // 是否开始执行动画

        this.beginAnimal = this.beginAnimal.bind(this)
        this.closeClick = this.closeClick.bind(this)
        this.contentOnLayout = this.contentOnLayout.bind(this)
        this.onScrollEnd = this.onScrollEnd.bind(this)
        this.onScrollListItemClick = this.onScrollListItemClick.bind(this)
    }

    componentDidMount(){
        // 不同类型下的内容组件的最大高度
        if (this.props.floatLayerType === 'TYPE_IMAGE') {
            contentMaxHeight = layerMaxHeight - topHeightTypeImage - bottomHeight - bottomBottom
        }
        if (this.props.floatLayerType === 'TYPE_TITLE') {
            contentMaxHeight = layerMaxHeight - topHeightTypeTitle - bottomHeight - bottomBottom
        }
        if (this.props.floatLayerType === 'TYPE_TITLE_BUTTON') {
            contentMaxHeight = layerMaxHeight - topHeightTypeTitle - bottomBottom
        }
        if (this.props.floatLayerType === 'TYPE_TITLE_SCROLL') {
            contentMaxHeight = listItemHeight * listItemMaxCount
        }
        if (this.props.floatLayerType === 'TYPE_TITLE_SCROLL' && this.props.scrollDataSource.length > 5) {
            this.setState({
                isShowOpacityBg: true
            })
        }

    }

    // 父视图改变值，子试图收到进行相关操作
    componentWillReceiveProps(newProps){
        if(newProps.isHiddenPopLayer){
            this.hiddenAnimal()
        }
    }

    // 开始动画及位置
    beginAnimal(endTop){
        Animated.timing(
            this.state.popTop,
            {
                toValue: endTop,
                duration: animatedTime
            }
        ).start()
    }

    // 结束动画
    hiddenAnimal(){
        Animated.timing(
            this.state.popTop,
            {
                toValue: screenHeight,
                duration: animatedTime
            }
        ).start()
    }

    // 关闭
    closeClick(){
        this.props.onCloseClick && this.props.onCloseClick()
    }

    // 滑动组件item点击
    onScrollListItemClick(index){
        this.closeClick()
        this.props.onScrollListItemClick && this.props.onScrollListItemClick(index)
    }

    // 获取组件高度
    contentOnLayout(event){
        // contentOnLayout 会多次调用
        if(this.props.isHiddenPopLayer){
            return
        }
        if (this.isBeginAnimated){
            return
        }
        // 获取内容组件的高度，得到弹框的高度，然后开始动画
        let contentHeight = event.nativeEvent.layout.height;

        // 总体弹框的高度
        let popLayerHeight;
        if (this.props.floatLayerType === 'TYPE_TITLE'){
            popLayerHeight = topHeightTypeTitle  + contentHeight  + bottomHeight + bottomBottom
        }
        if (this.props.floatLayerType === 'TYPE_IMAGE'){
            popLayerHeight = topHeightTypeImage  + contentHeight  + bottomHeight + bottomBottom
        }
        if (this.props.floatLayerType === 'TYPE_TITLE_BUTTON' || this.props.floatLayerType === 'TYPE_TITLE_SCROLL'){
            popLayerHeight = topHeightTypeTitle  + contentHeight + bottomBottom
        }


        // 如果内容高度大于最大高度，则视图可以滚动
        if (parseFloat(contentHeight) > parseFloat(contentMaxHeight)){
            this.isBeginAnimated = true; // 开始动画，不在执行 contentOnLayout

           this.setState({
               scrollEnabled: true,
           })

           // 总体弹框高度等于最大高度
           popLayerHeight = layerMaxHeight

           if (this.props.floatLayerType === 'TYPE_TITLE_BUTTON' || this.props.floatLayerType === 'TYPE_TITLE_SCROLL'){
               // 没有上下间距，所以内容的高度就是scrollView的高度
               contentHeight = contentMaxHeight
               popLayerHeight = contentHeight + topHeightTypeTitle + bottomBottom
           }else {
               // 此高度赋值给scrollView，因view 有 paddingVertical，所以scrollView得高度相应的减去padding
               contentHeight = contentMaxHeight - contenVertical - contenVertical
           }
       }

        if(this.props.floatLayerType === 'TYPE_TITLE_SCROLL'){
            if (parseFloat(popLayerHeight) < layerMinHeight){
                // 小于最小高度
                popLayerHeight = layerMinHeight
                contentHeight = popLayerHeight - (topHeightTypeTitle + bottomBottom)
            }
        }

        this.setState({
            popLayHeight: popLayerHeight,
            contentHeight: contentHeight
        })
        this.beginAnimal(screenHeight - popLayerHeight)

    }

    // 滚动结束
    onScrollEnd(e){

        if (this.props.floatLayerType === 'TYPE_TITLE_SCROLL' && this.props.scrollDataSource.length > 5){
            let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
            let contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
            let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
            if (offsetY + oriageScrollHeight >= contentSizeHeight){

                this.setState({
                    isShowOpacityBg: false
                })
            }else {
                this.setState({
                    isShowOpacityBg: true
                })
            }
        }

    }

    render() {
        return Render.render.call(this);
    }
}

PopLayer.propsType = {
}
PopLayer.defaultProps = {
}

