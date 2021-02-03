import React, { useState, useEffect, memo } from 'react';
import BBDPie from 'Components/echarts/PieChart';
import NoData from 'Components/noData/NoData';
// import {
//     enclaveIncome
// } from '../services';

const TypePieChart = (props) => {

    const [barOption, setBarOption] = useState({
        
    });
    const [loading, setLoading] = useState(true);    

    useEffect(() => {
        getBarData();
    }, []);

    function setOption(barData) {
        let option = {
            tooltip: {
                show: false
            },    
            color: ['#e40082', '#a591df', '#74b938', '#008fd7', '#f08519', '#e62169'],
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: [0, '65%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: true
                    },
                    data: barData
                }
            ]
        };
        return option;
    }
    
    const getBarData = () => {
        // enclaveIncome().then(res => {
        //     if (res) {
        setBarOption(setOption([
            {
                value: 21,
                name: '字体'
            },
            {
                value: 43,
                name: '图片'
            },
            {
                value: 64,
                name: '视频'
            },
            {
                value: 24,
                name: '办公文档'
            },
            {
                value: 53,
                name: '设计元素'
            },
            {
                value: 12,
                name: '音乐'
            }
        ]));
        // setBarOption(setOption(res));
        //         setLoading(false);
        //     }
        // }).finally(() => {
        //     setLoading(false);
        // });
    };

    const mouseover = (e, echartObj) => {
        // props.onMouseover(e);
        // // 当检测到鼠标悬停事件，取消默认选中高亮
        // echartObj.dispatchAction({
        //     type: 'downplay',
        //     seriesIndex: 0,
        //     dataIndex: beforeLight
        // });
        // // 高亮显示悬停的那块
        // echartObj.dispatchAction({
        //     type: 'highlight',
        //     seriesIndex: 0,
        //     dataIndex: e.dataIndex
        // });
    };
    
    // 检测鼠标移出后显示之前默认高亮的那块
    const mouseout = (e, echartObj) => {
        // SetBefore(0);
        // props.onMouseout();
        // echartObj.dispatchAction({
        //     type: 'downplay',
        //     seriesIndex: 0,
        //     dataIndex: e.dataIndex
        // });
        // echartObj.dispatchAction({
        //     type: 'highlight',
        //     seriesIndex: 0,
        //     dataIndex: 0
        // });
    };

    // 默认展示hover 效果
    const getChartObjs = (e) => {
        // e.dispatchAction({
        //     type: 'highlight',  
        //     seriesIndex: 0,
        //     dataIndex: 0    
        // });
    };

    return ( 
        <div style={{ width: '100%', height: '100%' }}>
            {
                barOption ? 
                    <BBDPie 
                        option={barOption}                                 
                        onEvents={{ 'mouseover': mouseover, 'mouseout': mouseout }}
                        // getChartObj={getChartObjs}
                    /> : <NoData isNoData={!loading}/>
            }
        </div>
    );
};
 
export default memo(TypePieChart);