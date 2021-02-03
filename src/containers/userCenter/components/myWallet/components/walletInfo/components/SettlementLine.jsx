import React, { useState, useEffect, memo } from 'react';
import PolyLineChart from 'Components/echarts/PolyLineChart';
import NoData from 'Components/noData/NoData';

const SettlementLine = () => {
    const [barOption, setBarOption] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBarData();
    }, []);

    function setOption(barData) {
        let option = {
            grid: {
                top: '10%',
                left: '5%'
                // right: '10%'
            },
            xAxis: [
                {
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#999999',
                        fontSize: 14,
                        margin: 12
                    },
                    boundaryGap: true,
                    data: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '近12个月的待结算走势',
                    nameGap: 15,
                    nameTextStyle: {
                        color: '#999999',
                        padding: [-10, 0, 0, 30]
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
                }
            ],
            series: barData
        };
        return option;
    }
    
    const getBarData = () => {
        const data = [
            {
                name: '待结算金额',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '笔数',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '已结算金额',
                type: 'line',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '已结算笔数',
                type: 'line',
                data: [320, 332, 301, 334, 390, 330, 320]
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
                    <PolyLineChart 
                        data={barOption} 
                    /> : <NoData isNoData={!loading}/>
            }
        </div>
    );
};
 
export default memo(SettlementLine);