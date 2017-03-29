/**
 * Created by lanccj on 17/3/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

//第三方组件
import Icon from 'react-native-vector-icons/Ionicons';

//自定义
import Css from '@config/Css';
import Size from '@config/Size';
import GridSectionView from '@components/GridSectionView';

//模拟数据
let appitemdatajson = require ('@data/appitem.json')
/**
 *
 */
export default class Apps extends Component {
    constructor(props) {
        super(props);
        this.getAppItem = this.getAppItem.bind(this);
        this.state = {
            appItemData:{
                data:[]
            }
        };
    }

    componentDidMount() {
        this.setState({
            appItemData:appitemdatajson
        })
    }

    getAppItem(item){
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
            <View style={Css.CANTAINER}>
                <StatusBar
                    backgroundColor="#5044EA"
                    barStyle="light-content"
                />

                <GridSectionView
                    items={this.state.appItemData.data}
                    renderItem={this.getAppItem}
                    itemsPerRow={4}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});
