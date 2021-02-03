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
// import React, { useState, useEffect } from 'react';
// import echarts from 'echarts';
// import LineBar from '@/components/echarts/LineBar';
// import PropTypes from 'prop-types';
// import styles from './softWareBar.less';
// import { fieldAnomaly } from 'Utils/util';

// function options(data) {
//     let series1Data = [data.industryIncome, data.softwareIncome, data.technologyServiceIncome, data.infoSecurityIncome, data.embeddedIncome];
//     let series2Data = [data.industryGrowth, data.softwareGrowth, data.technologyServiceGrowth, data.infoSecurityGrowth, data.embeddedGrowth];
//     let option = {
//         title: {
//             show: false
//         },
//         grid: {
//             top: '28%',
//             left: 20,
//             right: 20,
//             bottom: '2%',
//             containLabel: true
//         },
//         legend: {
//             show: true,
//             orient: 'horizontal',
//             left: '4%',
//             icon: 'rect',
//             itemWidth: 32,
//             itemHeight: 4,
//             top: '2%',
//             data: ['业务收入', '业务增速'],
//             itemGap: 10,
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         tooltip: {
//             backgroundColor: '#fff',
//             axisPointer: {
//                 type: 'none'
//             },
//             textStyle: {
//                 color: '#666',
//                 fontWeight: 'bold'
//             }
//             // formatter: function (v) {
//             //     return `<div class="screenTooltip riskMap"><div class="content">${v[0].axisValue}<br/>${v[0].seriesName}：<span style='color: #FC9530'>${thousands(v[0].value)}</span><br/>${v[1].seriesName}：<span style='color: #FC9530'>${v[1].value}%</span></div></div>`;
//             // }
//         },
//         yAxis: [
//             {
//                 name: '亿元',
//                 type: 'value',
//                 split: 5,
//                 nameTextStyle: {
//                     color: '#808FA6',
//                     padding: [0, 0, 0, 0]
//                 },
//                 splitArea: {
//                     show: false
//                 },
//                 splitLine: {
//                     show: true,
//                     lineStyle: {
//                         color: '#1E355B'
//                     }
//                 },
//                 axisLine: {
//                     show: false
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 axisLabel: {
//                     show: true,
//                     textStyle: {
//                         color: '#808FA6'
//                     }
//                 }
//             },
//             {
//                 show: true,
//                 type: 'value',
//                 name: '',
//                 split: 5,
//                 // min: 0,
//                 // max: 100,
//                 axisLabel: {
//                     formatter: '{value}%',
//                     textStyle: {
//                         color: '#808FA6'
//                     }
//                 },
//                 splitLine: {
//                     show: false,
//                     lineStyle: {
//                         color: '#076bc9'
//                     }
//                 },
//                 axisLine: {
//                     show: false
//                 },
//                 axisTick: {
//                     show: false
//                 }
//             }
//         ],
//         xAxis: {
//             name: '',
//             type: 'category',
//             data: ['全行业', '软件', '信息技术服务', '信息安全', '嵌入式系统'],
//             splitLine: {
//                 show: false
//             },
//             axisLine: {
//                 show: false,
//                 lineStyle: {
//                     color: '#d2d2d2'
//                 }
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 show: true,
//                 interval: 0,
//                 textStyle: {
//                     color: '#808FA6'
//                 }
//             }
//         },
//         series: [
//             {
//                 name: '业务收入',
//                 color: '#00AADF',
//                 type: 'bar',
//                 showBackground: true,
//                 barWidth: 10,
//                 backgroundStyle: {
//                     color: 'rgba(0,25,64,1)'
//                 },
//                 data: series1Data,
//                 itemStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(
//                             0, 0, 0, 1,
//                             [
//                                 { offset: 0, color: '#9DCEFF' },
//                                 { offset: 1, color: '#1C70E3' }
//                             ]
//                         ),
//                         borderWidth: 1,
//                         borderColor: '#11295A',
//                         shadowBlur: 0
//                     },
//                     emphasis: {
//                         color: new echarts.graphic.LinearGradient(
//                             0, 0, 0, 1,
//                             [
//                                 { offset: 0, color: '#9DCEFF' },
//                                 { offset: 1, color: '#1C70E3' }
//                             ]
//                         ),
//                         borderWidth: 1,
//                         borderColor: '#11295A',
//                         shadowBlur: 0
//                     }
//                 }
//             },
//             {
//                 name: '业务增速',
//                 type: 'bar',
//                 yAxisIndex: 1,
//                 data: series2Data,
//                 barWidth: 10,
//                 showBackground: true,
//                 backgroundStyle: {
//                     color: 'rgba(0,25,64,1)'
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: '#F9BEC5'
//                         }, {
//                             offset: 1,
//                             color: '#f86476'
//                         }])
//                     }
//                 },
//                 emphasis: {
//                     color: new echarts.graphic.LinearGradient(
//                         0, 0, 0, 1,
//                         [
//                             { offset: 0, color: '#F9BEC5' },
//                             { offset: 1, color: '#f86476' }
//                         ]
//                     ),
//                     borderWidth: 1,
//                     borderColor: '#11295A',
//                     shadowBlur: 0
//                 }
//             }
//         ]
//     };
//     return option;
// }
// export default function InternetBar({ data = {} }) {
//     const [barOption, setBarOption] = useState(null);
//     useEffect(() => {
//         getBarData();
//     }, [data]);

//     function getBarData() {
//         setBarOption(options(data));
//     }

//     return (
//         <div className={styles.softWareBox}>
//             {
//                 barOption ? <div className={styles.barBox}>
//                     <LineBar option={barOption} /></div> : null
//             }
//         </div>
//     );
// }

// InternetBar.propTypes = {
//     data: PropTypes.object
// };