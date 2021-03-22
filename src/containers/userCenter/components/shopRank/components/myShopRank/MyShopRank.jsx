import React, { useState, useEffect } from 'react';
import styles from './myShopRank.less';
import { Input, Select, Button, Table, message } from 'antd';
import Cookies from 'Utils/cookie';

const ButtonGroup = Button.Group;

export default function MyShopRank() {
    const columns = [
        {
            title: '选择',
            dataIndex: ''
        },
        {
            title: '开通模板',
            dataIndex: ''
        },
        {
            title: '作品',
            dataIndex: ''
        },
        {
            title: '关注',
            dataIndex: ''
        },
        {
            title: '作品收藏',
            dataIndex: ''
        },
        {
            title: '浏览器',
            dataIndex: ''
        },
        {
            title: '点赞',
            dataIndex: ''
        },
        {
            title: '转发',
            dataIndex: ''
        },
        {
            title: '操作',
            dataIndex: ''
        }
        
    ];
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5
    });
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
        })
    };
    const onChange = (e) => {
        console.log(e);
    };

    return (
        <div className={styles.myShopRank}>
            {/* 店铺排行榜页 */}
            <div className={styles.top}>
                <div className={styles.edition}>
                    <ButtonGroup>
                        <Button>日榜</Button>
                        <Button>月榜</Button>
                        <Button>季榜</Button>
                        <Button>年榜</Button>
                    </ButtonGroup>
                </div>
                <div className={styles.ranking}>
                    <span className={styles.rankingSpan}>店铺排行:</span>    
                    <span className={styles.rankingList}>879</span>
                </div>
            </div>

            <div className={styles.content}>
                <Table 
                    rowSelection ={rowSelection}
                    columns={columns} 
                    // dataSource={commodityList} 
                    size="middle" 
                    align="center"
                    pagination={pagination}
                    // rowKey = {rowKey}
                    onChange ={onChange}
                />
            </div>
        </div>
    );
}
