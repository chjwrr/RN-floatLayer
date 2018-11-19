/*
   * 弹框类型
   *
   * TYPE_TITLE            只有标题
   * TYPE_IMAGE            图标，标题，副标题
   * TYPE_TITLE_BUTTON     标题，标题左右按钮
   * TYPE_TITLE_SCROLL     标题，内部滑动组件
   *
   * */
const  TYPE_TITLE = 'TYPE_TITLE';
const  TYPE_IMAGE = 'TYPE_IMAGE';
const  TYPE_TITLE_BUTTON = 'TYPE_TITLE_BUTTON';
const  TYPE_TITLE_SCROLL = 'TYPE_TITLE_SCROLL';

// 判断是否是有效的 type
const isValidityType = (type)=>{
    const types = [TYPE_TITLE,TYPE_IMAGE,TYPE_TITLE_BUTTON,TYPE_TITLE_SCROLL];
    return types.indexOf(type) > -1;
};

const FloatLayerType = {
    TYPE_TITLE,
    TYPE_IMAGE,
    TYPE_TITLE_BUTTON,
    TYPE_TITLE_SCROLL,
    isValidityType
};
export default FloatLayerType
