/**
 * Created by lanccj on 17/3/28.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import { Pie } from 'react-native-pathjs-charts'
/**
 *
 */
export default class PieChart extends Component {
    render() {let data = [{
        "name": "XX管理",
        "population": 1000
    }, {
        "name": "XXX",
        "population": 200
    }, {
        "name": "XXX",
        "population": 120
    }, {
        "name": "XXX",
        "population": 154
    }]

        let options = {
            margin: {
                top: 1,
                left: 1,
                right: 1,
                bottom: 1
            },
            width: this.props.size,
            height: this.props.size,
            color: '#2980B9',
            r: this.props.size/4,
            R: this.props.size/2,
            legendPosition: 'topLeft',
            animate: {
                type: 'oneByOne',
                duration: 200,
                fillTransition: 3
            },
            label: {
                fontFamily: 'Arial',
                fontSize: 8,
                fontWeight: true,
                color: '#ffffff'
            }
        }

        return (
            <View>
                <Pie
                    data={data}
                    options={options}
                    accessorKey="population" />
            </View>
        )
    }
}

