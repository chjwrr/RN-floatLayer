# RN-floatLayer
RN组件-浮层-底部向上弹出


# 使用方法

```
{
this.state.isShowFloatLayer && <FloatLayer floatLayerType={'TYPE_IMAGE'}
                                           title={title}
                                           onCloseClick={this.closeClick}
                                           mainBtnText={mainBtnText}
                                           secondaryBtnText={secondaryBtnText}
                                           onMainBtnClick={this.onMainBtnClick}
                                           onSecondaryBtnClick={this.onSecondaryBtnClick}
                                           imageType={'success'}>

                        <Text style={{height: 20, width: 80}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>
                        <Text style={{height: 20, width: 80, marginTop: 100}}>安达市大</Text>

                    </FloatLayer>               
}

```

```
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
```
