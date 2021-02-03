/*
* @type 水平柱状图
*/
import React, { Component } from 'react';
import extend from 'extend';
import PropTypes from 'prop-types';
import EchartBase from './base/EchartBase';

class HorizontalBar extends Component {
    constructor(props) {
        super(props);
    }
    setOption(param) {
        let series = param.series;
        // let seriesItem = '';
        let seriesLength = series.length;
        // 值阀最大值
        let seriesData = [];
        for (let i = 0; i < seriesLength; i++) {
            let seriesItem = {
                'type': 'bar',
                'data': series[i]
            };
            seriesData.push(seriesItem);
        }
        let option = {
            color: [],
            title: {
                text: '',
                link: '',
                target: 'self',
                textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal',
                    fontFamily: 'microsoft yahei'
                }
            },
            grid: {
                left: 'auto',
                right: 15,
                bottom: 20,
                top: 28,
                containLabel: true
            },
            legend: {
                data: [],
                show: false,
                itemWidth: 20,
                itemHeight: 5,
                right: 'auto',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft Yahei'
                }
            },
            tooltip: {
                padding: [10, 10, 10, 10],
                trigger: 'item'
            },
            xAxis: {
                type: 'value',
                name: ''
            },
            yAxis: {
                type: 'category',
                name: '',
                data: []
            },
            series: seriesData
        };
        let op = extend(true, {}, option, param);
        return op;
    }
    render() {
        return (
            <EchartBase option={this.setOption(this.props.option)} style={this.props.style} />
        );
    }
}
export default HorizontalBar;

HorizontalBar.propTypes = {
    option: PropTypes.object,
    style: PropTypes.object
};
