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
            seriesData1.push(Number(item.income));
            seriesData2.push(Number(item.payment));
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
                data: ['收', '支']
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
                },
                {
                    show: false
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '近12个月的收支走势',
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
                    show: false
                }
            ],
            series: [
                {
                    name: '收',
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
                    name: '支',
                    type: 'bar',
                    data: seriesData2,
                    barWidth: 10,
                    yAxisIndex: 0,
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
                income: 12000,
                payment: 12300
            },
            {
                date: '2020-02',
                income: 15000,
                payment: 12453
            },
            {
                date: '2020-03',
                income: 10000,
                payment: 9803
            },
            {
                date: '2020-04',
                income: 9000,
                payment: 8592
            },
            {
                date: '2020-05',
                income: 15000,
                payment: 11837
            },
            {
                date: '2020-06',
                income: 12000,
                payment: 11000
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