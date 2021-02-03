import React, { useState, useEffect, memo } from 'react';
import echarts from 'echarts';
import VerticalBarChart from 'Components/echarts/VerticalBarChart';
import NoData from 'Components/noData/NoData';

const WithdrawBar = () => {
    const [barOption, setBarOption] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBarData();
    }, []);

    function setOption(barData) {
        let xAxisData = [];
        let seriesData1 = [];
        let seriesData2 = [];
        barData.map(item => {
            xAxisData.push(item.date);
            seriesData1.push(Number(item.amount));
            seriesData2.push(Number(item.count));
        });
        let option = {
            colors: ['red', 'green'],
            grid: {
                top: '10%',
                left: '5%'
                // right: '10%'
            },
            legend: {
                show: true,
                data: ['金额', '笔数']
            },
            xAxis: [
                {
                    data: xAxisData,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#999999',
                        fontSize: 14,
                        margin: 12
                    },
                    boundaryGap: true
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '近12个月的充值金额',
                    nameGap: 15,
                    nameTextStyle: {
                        color: '#999999',
                        padding: [-10, 0, 0, -10]
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 14,
                        margin: 13,
                        color: '#999999',
                        formatter: (params) => {
                            return `￥${params}`;
                        }
                    }
                },
                {
                    type: 'value',
                    name: '笔数走势',
                    nameGap: 15,
                    nameTextStyle: {
                        color: '#999999',
                        padding: [-10, -50, 0, 0]
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        margin: 13,
                        color: '#999999',
                        formatter: (params) => {
                            return `${params} 笔`;
                        }
                    }
                }
            ],
            series: [
                {
                    name: '金额',
                    color: '#e62129',
                    type: 'bar',
                    barWidth: 10,
                    yAxisIndex: 0,
                    data: seriesData1,
                    itemStyle: {
                        normal: {
                            color: '#e62129'
                        }
                    }
                },
                {
                    name: '笔数',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: seriesData2,
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: '#099e52'
                        }
                    }
                }
            ]
        };
        return option;
    }
    
    const getBarData = () => {
        const data = [
            {
                date: '2020-01',
                amount: 12000,
                count: 9
            },
            {
                date: '2020-02',
                amount: 15000,
                count: 5
            },
            {
                date: '2020-03',
                amount: 10000,
                count: 7
            },
            {
                date: '2020-04',
                amount: 9000,
                count: 2
            },
            {
                date: '2020-05',
                amount: 15000,
                count: 12
            },
            {
                date: '2020-06',
                amount: 12000,
                count: 11
            }
        ];
        setBarOption(setOption(data));
        // enclaveEnterNumber().then(res => {
        //     if (res) {
        //         setBarOption(setOption(res));
        //         setLoading(false);
        //     }
        // }).finally(() => {
        //     setLoading(false);
        // });
    };
    return ( 
        <div style={{ width: '100%', height: '100%' }}>
            {
                barOption ? 
                    <VerticalBarChart 
                        data={barOption} 
                    /> : <NoData isNoData={!loading}/>
            }
        </div>
    );
};
 
export default memo(WithdrawBar);