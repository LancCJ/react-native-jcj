/**
 * Created by lanccj on 17/3/28.
 * 轮播组件item
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';

//自定义
import LoadingView from '@components/LoadingView';

export default class SwiperItem extends Component {
    render() {
        return (
                this.props.type==='loading'?(
                    <LoadingView/>
                ): (
                <Image
                    style={styles.image}
                    source={{uri: this.props.uri}}
                />
                )
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex:1,
        resizeMode:'cover'
    }
});
