import React, { Component } from 'react';
import styles from './orderInfo.less';
import { Input, DatePicker } from 'antd';
import OrderTable from '../../../orderTable/OrderTable';
import OrderDetail from '../orderDetail/OrderDetail';

const { Search } = Input;
class OrderInfo extends Component {
    state = {
        columns: [
            {
                title: '序号',
                dataIndex: 'no',
                key: 'no',
                align: 'center',
                render: (text, record, index) => {
                    return index + 1;
                }
            },
            {
                title: '订单编号',
                dataIndex: 'orderNum',
                key: 'orderNum',
                align: 'center'
            },
            {
                title: '缩略图',
                dataIndex: 'thumbnail',
                key: 'thumbnail',
                align: 'center'
            },
            {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                align: 'center'
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                align: 'center',
                render: (text) => {
                    return `￥${text}`;
                }
            },
            {
                title: '订单时间',
                dataIndex: 'orderTime',
                key: 'orderTime',
                align: 'center'
            },
            {
                title: '付款时间',
                dataIndex: 'paymentTime',
                key: 'paymentTime',
                align: 'center'
            },
            {
                title: '授权类型',
                dataIndex: 'aType',
                key: 'aType',
                align: 'center'
            },
            {
                title: '授权时间',
                dataIndex: 'aDate',
                key: 'aDate',
                align: 'center',
                render: (text) => {
                    return `${text}年`;
                }
            },
            {
                title: '授权编号',
                dataIndex: 'aNum',
                key: 'aNum',
                align: 'center'
            },
            { 
                title: '下载',
                dataIndex: 'download',
                key: 'download',
                align: 'center',
                render: (text) => {
                    if (text !== 1) {
                        return '已使用';
                    }
                    return <span>下载</span>;
                }
            },
            { // 1已完善 2未完善
                title: '完善信息',
                dataIndex: 'completeInfo',
                key: 'completeInfo',
                align: 'center',
                render: (text) => {
                    if (text === 1) {
                        return '已完善';
                    }
                    return <span>完善信息</span>;
                }
            },
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: () => {
                    return <span className={styles.toOrderDetail} onClick={this.handleShowDetail}>详情</span>;
                }
            }
        ],
        dataSource: [
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                aType: '字-RF',
                aDate: 3,
                aNum: 'GDKASDKUBCKK11',
                download: 1,
                completeInfo: 2
            }
        ],
        selectedRowKeys: [],
        paginationParams: {
            pageNum: 1,
            pageSize: 10
        },
        startTime: '',
        endTime: '',
        searchValue: '',
        showDetail: false
    }

    // 单选复选
    onSelectChange = (selectedRowKeys) => { 
        this.setState({
            selectedRowKeys
        });
    }

    // 翻页操作
    handlePageChange = (pagination) => {
        const { selectedRowKeys, paginationParams } = this.state;
        if (paginationParams.pageSize !== pagination.pageSize) {
            this.setState({
                pagination: {
                    ...paginationParams,
                    pageNum: 1,
                    pageSize: pagination.pageSize
                }
                
            }, () => {
                // this.fetchDataList(); 刷新列表
            });
            this.setState({
                selectedRowKeys
            });
        } else {
            this.setState({
                pagination: {
                    ...paginationParams,
                    pageNum: pagination.current,
                    pageSize: pagination.pageSize
                }
            
            }, () => {
                // this.fetchDataList();
            });
            this.setState({
                selectedRowKeys
            });
        }
    }

    // 获取订单时间
    getOrderTime = (date, dateStr, type) => {
        // console.log(date, dateString);
        if (type === 'start' ) {
            this.setState({
                startTime: dateStr
            });
        } else {
            this.setState({
                endTime: dateStr
            });
        }
    }

    // 获取订单时间
    getOrderNum = (v) => {
        this.setState({
            searchValue: v
        });
    }

    // 点击更多展示详情
    handleShowDetail = () => {
        this.setState({
            showDetail: !this.state.showDetail
        });
    }

    render() {
        let { dataSource, columns, selectedRowKeys, paginationParams, showDetail } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <>
            {!showDetail ? <div className={styles.orderInfo}>
                <div className={styles.infoHeader}>
                    <div className={styles.orderTime}>
                        <span>订单时间</span>
                        <DatePicker onChange={(d, dstr) => this.getOrderTime(d, dstr, 'start')} />
                        <DatePicker onChange={(d, dstr) => this.getOrderTime(d, dstr, 'end')} />
                    </div>
                    <div className={styles.searchOrderNum}>
                        <span>订单号</span>
                        <Search
                            placeholder="请输入订单号"
                            onSearch={this.getOrderNum}
                            style={{ width: 200 }}
                        />
                    </div>
                    <div className={styles.exportBtn}>导出</div>
                </div>
                <div className={styles.tableContainer}>
                    <OrderTable
                        dataSource={dataSource}
                        columns={columns}
                        rowSelection={rowSelection}
                        onChange={this.handlePageChange}
                        pagination={{
                            current: paginationParams.pageNum,
                            pageSize: paginationParams.pageSize,
                            ...paginationParams,
                            showSizeChanger: true,
                            showQuickJumper: true
                        }}
                    />
                </div>
            </div> :
                <OrderDetail
                    handleGoBack={this.handleShowDetail}
                    orderType={1}
                />
            }
            </>
        );
    }
}
export default OrderInfo;
