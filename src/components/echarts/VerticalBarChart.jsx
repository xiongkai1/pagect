/*
 * @description: 阴影底部的单柱状图
*/ 
import React, { Component } from 'react';
import echarts from 'echarts';
import extend from 'extend';
import ReactEcharts from 'echarts-for-react';

export default class VarticalBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption(params) {
        let option = {
            tooltip: {
                // trigger: 'item',
                // backgroundColor: 'transparent',
                // position(point, params, dom, rect, size) {
                //     return [point[0] - (dom.offsetWidth / 2), rect.y - 40];
                // },
                // formatter(params) {
                //     return `
                //         <span class="bubbleTooltips">${params.value}</span>
                //     `;
                // }
            },
            grid: {
                top: params.gridTop ? params.gridTop : '24%',
                left: '2%',
                right: '7%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: [],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    margin: 12
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(112,112,112,0.2)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(112,112,112,0.2)'
                    }
                },
                boundaryGap: false
            },
            {
                data: [],
                boundaryGap: false,
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false,
                    length: 5,
                    lineStyle: {
                        color: 'rgba(112,112,112,0.2)'
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(112,112,112,0.2)'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(112,112,112,0.2)'
                    }
                }
            }
            ],
            yAxis: [
                {
                    name: params.yName ? params.yName : '',
                    nameTextStyle: {
                        color: 'rgba(255,255,255,0.5)',
                        padding: [0, 0, 0, -25],
                        fontSize: 14
                    },
                    type: 'value',
                    data: [0, 20, 40, 60, 80, 100],
                    axisTick: {
                        show: true,
                        length: 14
                    },
                    axisLabel: {
                        interval: 0,
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: 14,
                        margin: 20
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(112,112,112,0.2)'
                        }
                    },
                    minInterval: 1,
                    boundaryGap: false
                },
                {
                    data: [0, 20, 40, 60, 80, 100],
                    boundaryGap: false,
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        length: 14,
                        interval: 0,
                        lineStyle: {
                            color: '#8f95a7',
                            opacity: 0.2
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#8f95a7',
                            opacity: 0.2
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#8f95a7',
                            opacity: 0.2
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    data: [],
                    type: 'bar',
                    barWidth: 10
                    // itemStyle: {
                    //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //         offset: 0, color: params.colors && params.colors.length > 0 ? params.colors[0] : 'rgba(230,255,101,0.3)' // 0% 处的颜色
                    //     },  {
                    //         offset: 1, color: params.colors && params.colors.length > 0 ? params.colors[1] : 'rgba(101,178,255,0)' // 100% 处的颜色
                    //     }]
                    //     ) 
                    // }
                },
                {
                    name: '',
                    data: [],
                    type: 'bar'
                }
            ]
        };
        let op = extend(true, {}, option, params);
        return op;
    }
    render() {
        let { data, style } = this.props;
        return (
            <ReactEcharts
                option={this.getOption(data)}
                notMerge={true}
                lazyUpdate={true}
                style={style ? style : { width: '100%', height: '100%' }}
            />
        );
    }
}
