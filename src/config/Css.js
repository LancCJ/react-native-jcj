/**
 * 样式全局控制
 */

import Size from '@config/Size';

export default {
    /************************全局共用位置控制***********************************/
    // 水平容器
    ROW_CONTAINER: {
        flex: 1,
        flexDirection: 'row',
    },
    // 垂直容器
    COLUMN_CONTAINER: {
        flex: 1,
        flexDirection: 'column',
    },
    // 垂直居中容器
    COLUMN_CENTER_CONTAINER: {
        justifyContent: 'center',
    },
    // 居中容器
    CENTER_CONTAINER: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 水平居中容器
    ROW_CENTER_CONTAINER: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 水平分割线
    HORIZONTAL_BORDER: {
        backgroundColor: '#F4F3F4',
        height: 1,
    },
    CANTAINER:{
        flex:1,
        backgroundColor:'#EFEEF1'
    },
    SPACE_AROUND:{
        justifyContent:'space-around'
    },
    SPACE_BETWEEN:{
        justifyContent:'space-between'
    },
    /************************Swiper***********************************/
    SWIPER_PAGINATION:{
        bottom:2
    },
    SEARCHBAR_VIEW:{
        position:'absolute',
        marginTop:0,
        width:Size.screen.width
    },
    /************************SearchBar***********************************/
    SEARCHBAR_CONTAINER:{
        backgroundColor:'transparent',
        borderBottomWidth:0,
        borderTopWidth:0
    },
    SEARCHBAR_INPUT:{
        backgroundColor:'#FFFFFF',
        color:'#2B2B2B',
        opacity:0.5
    },
    SEARCHBAR_ICON:{
        color:'#2B2B2B'
    },
    /************************lineitem***********************************/
    LINEITEM_CONTAINER: {
        backgroundColor:'#FFFFFF',
        justifyContent: 'space-around',
        padding:10
    },
    LINEITEM_ITEMVIEW:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    /************************Chart***********************************/
    CHART_VIEW:{
        backgroundColor:'#FFFFFF',
        marginTop:5,
        width:Size.screen.width,
        height:Size.screen.heightQuarter
    },
    CHART_TITLE_VIEW:{
        width:Size.screen.width,
        height:20
    },
    CHART_TITLE:{
        marginLeft:5
    },
    CHART_LEFT:{
        flex:1,
        height:Size.screen.heightQuarter-21
    },
    CHART_RIGHT:{
        flex:2,
        height:Size.screen.heightQuarter-21,
        //borderWidth:1,borderColor:'#5044EA',
    },
    CHART_ITEM:{
        borderWidth:1,borderColor:'#999999',
        margin:10,
        alignItems:'center'
    },
    /************************Task***********************************/
    TASK_VIEW:{
        backgroundColor:'#FFFFFF',
        marginTop:5,
        width:Size.screen.width,
        height:Size.screen.heightQuarter
    },
    TASK_TITLE:{
        marginLeft:5
    },
}