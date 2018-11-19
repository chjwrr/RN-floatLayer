
import {
    Dimensions
} from 'react-native'
import {IsIphoneX} from "../../../../../business/utils/IsIphoneAdapter";

const screenHeight = Dimensions.get('window').height;

export const topHeightTypeTitle = 60 // 顶部标题高度  标题
export const topHeightTypeImage = 145 // 顶部标题高度 标题，图片，副标题

export const topHorizontal = 16 // 顶部左右边距

export const contenVertical = 25 // 内容上下边距
export const contentHorizontal = 16 // 内容左右边距

export const bottomHorizontal = 12 // 底部按钮左右边距
export const bottomHeight = 54 // 底部按钮高度
export const bottomBottom = IsIphoneX() ? 34 : 0 // 底部按钮距离底部的高度
export const bottomSpaceWidth = 10 // 底部两个按钮之间的间距

export const animatedTime = 250 // 动画时间
export const animatedOpacity = 0.6 // 背景颜色透明度

export const listItemHeight = 55 // 弹出框中列表单元格的高度
export const listItemMaxCount = 5 // 弹出框中列表单元格最多显示个数

export const layerMaxHeight = screenHeight * 3 / 4 // 弹框的最大高度
export const layerMinHeight = screenHeight * 1 / 4 // 弹框的最小高度
