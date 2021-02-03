import React, { Component } from 'react';
import styles from './rechargeInfo.less';
import WithdrawBar from './components/WithdrawBar';
import OrderTable from '../../../orderTable/OrderTable';

export default class RechargeInfo extends Component {
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
            {// 1收入 2支出 3充值 4提现 5待结算金额 
                title: '账单类型',
                dataIndex: 'type',
                key: 'type',
                align: 'center',
                render: (text) => {
                    if (text === 1) {
                        return <span style={{ color: '#099e52' }}>收入</span>;
                    } else if (text === 2) {
                        return <span style={{ color: '#e62129' }}>支出</span>;
                    } else if (text === 3) {
                        return '充值';
                    } else if (text === 4) {
                        return '提现';
                    }
                    return '待结算金额';
                }
            },
            {
                title: '金额',
                dataIndex: 'price',
                key: 'price',
                align: 'center',
                render: (text) => {
                    return `￥${text}`;
                }
            },
            {
                title: '商品ID',
                dataIndex: 'goodsId',
                key: 'goodsId',
                align: 'center'
            },
            {
                title: '账单时间',
                dataIndex: 'orderTime',
                key: 'orderTime',
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
            { // 1支付成功 2已到账 3处理中 4待结算 5提现成功 6结算成功 7支付成功
                title: '当前状态',
                dataIndex: 'status',
                key: 'status',
                align: 'center',
                render: (text) => {
                    if (text === 1) {
                        return '支付成功';
                    } else if (text === 2) {
                        return '已到账';
                    } else if (text === 3) {
                        return <span style={{ color: '#e62129' }}>处理中</span>;
                    } else if (text === 4) {
                        return <span style={{ color: '#e62129' }}>待结算</span>;
                    } else if (text === 5) {
                        return '提现成功';
                    } else if (text === 6) {
                        return '结算成功';
                    }
                    return '支付成功';
                }
            },
            {
                title: '更多',
                dataIndex: 'more',
                key: 'more',
                align: 'center',
                render: () => {
                    return <span className={styles.toOrderDetail}>详情</span>;
                }
            }
        ],
        dataSource: [
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 1,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 4,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 3,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 1,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 2,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 3
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 1,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 4
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 5,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 4
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 1,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 7
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 2,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 1
            },
            {
                orderNum: 'BKUDBSACBLACBACL12321',
                type: 3,
                price: 8888,
                orderTime: '2020-11-29',
                goodsId: 'SJD71T2T9696',
                paymenPrice: 324,
                count: 3,
                paymentWay: 3,
                status: 6
            }
        ],
        selectedRowKeys: [],
        paginationParams: {
            pageNum: 1,
            pageSize: 10
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
    render() {
        let { dataSource, columns, selectedRowKeys, paginationParams } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        return (
            <div className={styles.rechargeInfo}>
                <div className={styles.rechargeTopPart}>
                    <WithdrawBar/>
                </div>
                <div className={styles.rechargeContentPart}>
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
                    <div className={styles.statisticsRow}>
                        <div>
                            已选择<span style={{ color: '#e62129', fontWeight: 700, margin: '0px 5px' }}>20</span>件
                        </div>
                        <div>
                            充值：<span>87983.77</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
