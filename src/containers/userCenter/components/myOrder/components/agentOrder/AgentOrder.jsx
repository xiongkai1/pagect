import React, { Component } from 'react';
import styles from './agentOrder.less';
import { Input, DatePicker } from 'antd';
import OrderTable from '../../../orderTable/OrderTable';
import OrderDetail from '../orderDetail/OrderDetail';

const { Search } = Input;
export default class AgentOrder extends Component {
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
                title: '数量',
                dataIndex: 'count',
                key: 'count',
                align: 'center'
            },
            {
                title: '付款金额',
                dataIndex: 'paymenPrice',
                key: 'paymenPrice',
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
            { // 1支付宝支付 2微信支付 3余额支付
                title: '付款方式',
                dataIndex: 'paymentWay',
                key: 'paymentWay',
                align: 'center',
                render: (text) => {
                    if (text) {
                        if (text === 1) {
                            return '支付宝支付';
                        } else if (text === 2) {
                            return '微信支付';
                        }
                        return '余额支付';
                    }
                }
            },
            { // 1正在加急处理 2预收佣金
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                render: (text) => {
                    if (text === 1) {
                        return '正在加急处理';
                    }
                    return '预收佣金';
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
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2442,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2424,
                count: 3,
                paymentWay: 2,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 234,
                count: 3,
                paymentWay: 1,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 234,
                count: 3,
                paymentWay: 3,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2423,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 564,
                count: 3,
                paymentWay: 3,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 786,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 786,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 123,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 123,
                count: 3,
                paymentWay: 1,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2342,
                count: 3,
                paymentWay: 1,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2342,
                count: 3,
                paymentWay: 1,
                status: 2
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: '字体',
                price: 8888,
                orderTime: '2020-11-29',
                paymentTime: '2020-11-29',
                paymenPrice: 2342,
                count: 3,
                paymentWay: 1,
                status: 2
            }
        ],
        selectedRowKeys: [],
        paginationParams: {
            pageNum: 1,
            pageSize: 10
        },
        startTime: '',
        endTime: '',
        searchValue: ''
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.activeKey !== this.props.activeKey) {
            this.setState({
                showDetail: false
            });
        }
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
            {!showDetail ?
                <div className={styles.agentOrder}>
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
                    orderType={2}
                />
            }
            </>
        );
    }
}
