/**
 * Created by lanccj on 17/3/27.
 * 首页
 */
import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native';

//第三方组件
import { SearchBar } from 'react-native-elements'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

//自定义
import Css from '@config/Css';
import Size from '@config/Size';
import SwiperItem from '@components/SwiperItem';
import LoadingView from '@components/LoadingView';
import GridView from '@components/GridView';
import PieChart from '@components/PieChart';

//模拟数据
let swiperdatajson = require ('@data/swiper.json')
let lienritemdatajson = require ('@data/lineitem.json')
let chartitemdatajson = require ('@data/chartitem.json')

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.getSwiperItem = this.getSwiperItem.bind(this);
        this.getLineItem = this.getLineItem.bind(this);
        this.getChartItem = this.getChartItem.bind(this);
        this.state = {
            swiperData:{
                data:[]
            },
            lineItemData:{
                data:[]
            },
            chartItemData:{
                data:[]
            },
        };
    }

    componentDidMount() {
        this.setState({
            swiperData:swiperdatajson,
            lineItemData:lienritemdatajson,
            chartItemData:chartitemdatajson
        })
    }

    getSwiperItem(){

        var SwiperItems=[]

        if(this.state.swiperData.data.length<=0){
            SwiperItems.push(<SwiperItem key="0" type="loading"/>)
        }else{

            for (var i=0;i<this.state.swiperData.data.length;i++)
            {
                SwiperItems.push(
                        <SwiperItem  type="image" uri={this.state.swiperData.data[i].uri} key={this.state.swiperData.data[i].id}/>
                )
            }
        }

        return SwiperItems

    }

    getLineItem(){

        var LineItems=[]

        if(this.state.lineItemData.data.length<=0){
            LineItems.push(<LoadingView key="0"/>)
        }else{

            for (var i=0;i<this.state.lineItemData.data.length;i++)
            {
                LineItems.push(
                    <TouchableOpacity onPress={()=>Actions.test()} key={this.state.lineItemData.data[i].id}>
                        <View style={Css.LINEITEM_ITEMVIEW}
                        >
                            <Icon
                                color={this.state.lineItemData.data[i].color}
                                name={this.state.lineItemData.data[i].icon}
                                size={35}
                            />
                            <Text
                            >
                                {this.state.lineItemData.data[i].title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        }

        return LineItems

    }

    getChartItem(item){
        return (
                <View style={[Css.ROW_CONTAINER,Css.SPACE_AROUND,Css.CHART_ITEM]}
                      key={item.id}
                >
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.total}</Text>
                    </View>
                    <Icon
                        color={item.color}
                        name={item.icon}
                        size={35}
                    />
                </View>
        )
    }

    render() {
        return (
            <ScrollView style={Css.CANTAINER}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />

                <Swiper
                    autoplay={true}
                    height={Size.screen.heightThird}
                    width={Size.screen.width}
                    paginationStyle={Css.SWIPER_PAGINATION}
                >
                    {this.getSwiperItem()}
                </Swiper>

                <View style={Css.SEARCHBAR_VIEW}>
                    <SearchBar
                        lightTheme
                        placeholder='搜索发现更多内容'
                        containerStyle={Css.SEARCHBAR_CONTAINER}
                        inputStyle={Css.SEARCHBAR_INPUT}
                        icon={Css.SEARCHBAR_ICON}
                    />
                </View>

                <View style={[Css.ROW_CENTER_CONTAINER,Css.LINEITEM_CONTAINER]}>
                    {this.getLineItem()}
                </View>

                <View style={[Css.CHART_VIEW]}>
                    <View style={Css.CHART_TITLE_VIEW}>
                        <Text style={Css.CHART_TITLE}>工作统计</Text>
                    </View>
                    <View style={Css.HORIZONTAL_BORDER}></View>
                    <View style={[Css.ROW_CONTAINER]}>
                        <View style={[Css.CHART_LEFT]}>
                            <PieChart size={Size.screen.heightQuarter-21}/>
                        </View>
                        <View style={[Css.CHART_RIGHT]}>
                            <GridView
                                items={this.state.chartItemData.data}
                                renderItem={this.getChartItem}
                                itemsPerRow={2}
                            />
                        </View>
                    </View>
                </View>

                <View style={[Css.CHART_VIEW]}>
                    <View style={Css.CHART_TITLE_VIEW}>
                        <Text style={Css.CHART_TITLE}>任务下发</Text>
                    </View>
                    <View style={Css.HORIZONTAL_BORDER}></View>
                    <GridView
                        items={this.state.chartItemData.data}
                        renderItem={this.getChartItem}
                        itemsPerRow={2}
                    />
                </View>

            </ScrollView>
        );
    }
}




