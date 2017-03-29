/**
 * Created by lanccj on 17/3/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert,StatusBar
} from 'react-native';
/**
 *
 */
export default class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#5044EA"
                    barStyle="light-content"
                />
                <Text style={[{color: "red"}]}>测试界面</Text>
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
