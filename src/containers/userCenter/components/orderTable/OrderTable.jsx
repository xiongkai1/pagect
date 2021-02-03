import React, { Component } from 'react';
import styles from './orderTable.less';
import { Table } from 'antd';

export default class OrderTable extends Component {
    render() {
        let { dataSource = [], columns = [], rowSelection = {}, onChange = () => {}, pagination = {} } = this.props;
        return (
            <Table
                className={styles.orderTable}
                dataSource={dataSource}
                rowKey={(r, i) => i}
                columns={columns}
                rowSelection={rowSelection}
                onChange={onChange}
                pagination={pagination}
            />
        );
    }
}
