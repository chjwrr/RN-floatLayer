import React from 'react';

import {
    Animated,
    View,
    ScrollView,
} from 'react-native';

import styles from './styles'
import TopViewTypeImage from '../TopViewTypeImage'
import TopViewTypeTitle from '../TopViewTypeTitle'
import BottomView from '../BottomView'
import TopViewTypeTitleButton from '../TopViewTypeTitleButton'
import CenterPopListView from '../PopListView'
export default {

    render() {
        const {
            title,
            mainBtnText,
            secondaryBtnText,
            onMainBtnClick,
            onSecondaryBtnClick,
            floatLayerType,
            subTitle,
            subTitleIsRichText,
            richBeginIndex,
            richLength,
            imageType,
            onScrollListItemClick
        } = this.props


        let topViewComponent;
        let bottomViewComponent = <BottomView mainBtnText={mainBtnText}
                                              secondaryBtnText={secondaryBtnText}
                                              onMainBtnClick={onMainBtnClick}
                                              onSecondaryBtnClick={onSecondaryBtnClick} />
        let contentStyle = styles.contentView;
        let contentComponent = this.props.children

        if (floatLayerType === 'TYPE_TITLE' || floatLayerType === 'TYPE_TITLE_SCROLL'){
            topViewComponent = <TopViewTypeTitle title={title} onCloseClick={this.closeClick} />
        }
        if (floatLayerType === 'TYPE_IMAGE'){
            topViewComponent = <TopViewTypeImage title={title}
                                                 onCloseClick={this.closeClick}
                                                 subTitle={subTitle}
                                                 subTitleIsRichText={subTitleIsRichText}
                                                 richBeginIndex={richBeginIndex}
                                                 richLength={richLength}
                                                 imageType={imageType}
                                                 onCloseClick={this.closeClick} />
        }


        if (floatLayerType === 'TYPE_TITLE_BUTTON') {
            topViewComponent = <TopViewTypeTitleButton title={title}
                                    mainBtnText={mainBtnText}
                                    secondaryBtnText={secondaryBtnText}
                                    onMainBtnClick={onMainBtnClick}
                                     onSecondaryBtnClick={onSecondaryBtnClick}/>
            bottomViewComponent = <View/>
            contentStyle = {}
        }


        if (floatLayerType === 'TYPE_TITLE_SCROLL') {
            bottomViewComponent = <View/>
            contentStyle = {}
            contentComponent = <CenterPopListView scrollDataSource={this.props.scrollDataSource}
                                                  onScrollListItemClick={this.onScrollListItemClick}/>
        }

        let bgOpacityView = <View/>
        if (floatLayerType === 'TYPE_TITLE_SCROLL' && this.props.scrollDataSource.length >= 6 && this.state.isShowOpacityBg) {
            bgOpacityView = <View style={styles.bg}/>
        }
        return (
            <Animated.View style={[styles.container, {height: this.state.popLayHeight, transform: [{translateY:this.state.popTop}]}]}  >

                { topViewComponent }

                <View style={contentStyle} onLayout={this.contentOnLayout}>
                    <ScrollView style={this.state.scrollEnabled ? {height: this.state.contentHeight} : {}}
                                scrollEnabled={this.state.scrollEnabled}
                                showsVerticalScrollIndicator={false}
                                onMomentumScrollEnd={this.onScrollEnd}
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
