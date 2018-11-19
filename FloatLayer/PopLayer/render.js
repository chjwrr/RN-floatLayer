import React from 'react';

import {
    Animated,
    View,
    ScrollView,
    Image
} from 'react-native';

import styles from './styles'
import TopViewTypeImage from '../TopViewTypeImage'
import TopViewTypeTitle from '../TopViewTypeTitle'
import BottomView from '../BottomView'
import TopViewTypeTitleButton from '../TopViewTypeTitleButton'
import CenterPopListView from '../PopListView'
import FloatLayerType from '../FloatLayerType'

const FloatLayerShadow = require('../image/floatLayer_shadow.png')

export default {

    render() {
        const {
            title,
            mainBtnText,
            secondaryBtnText,
            onMainBtnClick,
            onSecondaryBtnClick,
            floatLayerType,
            subTitles,
            imageType,
            scrollDataSource,
            isBanMainBtn,
            isAutoAllowMainBtn
        } = this.props;


        // 底部按钮
        let topViewComponent = <View/>;
        let bottomViewComponent = <BottomView mainBtnText={mainBtnText}
                                              secondaryBtnText={secondaryBtnText}
                                              onMainBtnClick={onMainBtnClick}
                                              onSecondaryBtnClick={onSecondaryBtnClick}
                                              isBanMainBtn={isBanMainBtn}
                                              isAutoAllowMainBtn={isAutoAllowMainBtn} />
        // 中间内容视图
        let contentStyle = styles.contentView;
        let contentComponent = this.props.children || <View/>

        // 顶部视图
        if (floatLayerType === FloatLayerType.TYPE_TITLE || floatLayerType === FloatLayerType.TYPE_TITLE_SCROLL){
            topViewComponent = <TopViewTypeTitle title={title} onCloseClick={this.closeClick} />
        }
        if (floatLayerType === FloatLayerType.TYPE_IMAGE){
            topViewComponent = <TopViewTypeImage title={title}
                                                 onCloseClick={this.closeClick}
                                                 subTitles={subTitles}
                                                 imageType={imageType}
                                                 onCloseClick={this.closeClick} />
        }


        if (floatLayerType === FloatLayerType.TYPE_TITLE_BUTTON) {
            topViewComponent = <TopViewTypeTitleButton title={title}
                                    mainBtnText={mainBtnText}
                                    secondaryBtnText={secondaryBtnText}
                                    onMainBtnClick={onMainBtnClick}
                                    onSecondaryBtnClick={onSecondaryBtnClick}/>
            bottomViewComponent = <View/>
            contentStyle = {}
        }


        let scrollDataSourceNew = scrollDataSource || []
        if (floatLayerType === FloatLayerType.TYPE_TITLE_SCROLL) {
            bottomViewComponent = <View/>
            contentStyle = {}
            contentComponent = <CenterPopListView scrollDataSource={scrollDataSourceNew}
                                                  onScrollListItemClick={this.onScrollListItemClick}/>
        }

        //  TYPE_TITLE_SCROLL  列表多于5条，底部出现半透明层遮罩
        let bgOpacityView = <View/>
        if (floatLayerType === FloatLayerType.TYPE_TITLE_SCROLL && scrollDataSourceNew.length >= 6 && this.state.isShowOpacityBg) {
            bgOpacityView = <Image source={FloatLayerShadow} style={styles.bgImg}/>
        }

        return (
            <Animated.View style={[styles.container, {height: this.state.popLayHeight, transform: [{translateY:this.state.popTop}]}]}  >

                { topViewComponent }

                <View style={contentStyle} onLayout={this.contentOnLayout}>
                    <ScrollView style={this.state.scrollEnabled ? {height: this.state.contentHeight} : {}}
                                scrollEnabled={this.state.scrollEnabled}
                                showsVerticalScrollIndicator={false}
                                onScroll={this.onScroll}
                                scrollEventThrottle={20}
                    >
                        {contentComponent}
                    </ScrollView>

                    {bgOpacityView}

                </View>

                { bottomViewComponent }

            </Animated.View>
        )
    }
}
