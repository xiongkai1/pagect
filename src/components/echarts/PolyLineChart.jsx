/*
 * @description: 多折线图
*/ 
import React, { Component } from 'react';
import echarts from 'echarts';
import extend from 'extend';
import ReactEcharts from 'echarts-for-react';

export default class PolyLineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getOption(props) {
        // let legendCommonParams = []; 
        let seriesCommonParams = []; 

        // props.legend && (props.legend).map(item => {
        //     legendCommonParams.push({
        //         orient: 'horizontal',
        //         align: 'left',
        //         icon: 'rect',
        //         itemWidth: 32,
        //         itemHeight: 4,
        //         itemGap: 40,
        //         inactiveColor: '#999999',
        //         textStyle: {
        //             color: '#ffffff',
        //             fontSize: 14
        //         },
        //         ...item
        //     });
        //     return legendCommonParams;
        // });
        props.series && (props.series).map((item, index) => {
            seriesCommonParams.push({
                type: 'line',
                showSymbol: false,
                symbolSize: 2,
                z: 2,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 5,
                        shadowColor: 'rgba(255,255,255,0.5)'
                    }
                },
                ...item
            });
            return seriesCommonParams;
        });
        let option = {
            tooltip: {
                trigger: 'axis',
                // backgroundColor: 'transparent',
                axisPointer: {
                    type: 'line',
                    z: 1,
                    lineStyle: {
                        width: 1,
                        color: 'rgba(101,178,255,1)'
                    }
                },
                formatter: (params) => {
                    let leftStr = '';
                    let rightStr = '';
                    params.forEach((item, index) => {
                        if (index + 1 <= params.length / 2 + 1) {
                            leftStr += '<li class="itemRow"><div class="circle" style="background: ' + item.color + ';"></div>' + item.seriesName + ':' + '<span style="margin-left: 5px">' + item.value + '</span>' + '</li>';
                        } else {
                            rightStr += '<li class="itemRow"><div class="circle" style="background: ' + item.color + ';"></div>' + item.seriesName + ':' + '<span style="margin-left: 5px">' + item.value + '</span>' + '</li>';
                        }
                    });
                    return `<div class="polyLineTooltips">
                            <ul class="leftList">
                                ${leftStr}
                            </ul>
                            <ul class="rightList">
                                ${rightStr}
                            </ul>
                    </div>`;
                }
            },
            color: props && props.colors,
            grid: props.grid ? props.grid : {
                top: '27%',
                left: '2%',
                right: '7%',
                bottom: '5%',
                containLabel: true
            },
            // legend: legendCommonParams,
            xAxis: [{
                type: 'category',
                data:
                    props && props.xAxisData
                        ? props.xAxisData
                        : ['2020.01', '2020.02', '2020.03', '2020.04', '2020.05', '2020.06', '2020.07'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    margin: 10,
                    rotate: props.xRotate ? 30 : 0
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
            }
            ],
            yAxis:
                props && props.yAxis
                    ?
                    props.yAxis
                    :
                    [
                        {
                            type: 'value',
                            data: [0, 20, 40, 60, 80, 100],
                            axisTick: {
                                show: false,
                                length: 14
                            },
                            axisLabel: {
                                interval: 0,
                                color: 'transparent',
                                fontSize: 16,
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
                            show: false,
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
            series: seriesCommonParams
        };
        let op = extend(true, {}, option, props);
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
