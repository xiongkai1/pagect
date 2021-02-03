import React, { useState } from 'react';
import testImg from 'Images/testImg.jpg';

export default function(props) {

    // 列表数据
    const columns = [
        {
            key: 1,
            title: '商品信息'
        },
        {
            key: 2,
            title: '商品选项'
        },
        {
            key: 3,
            title: '价格'
        },
        {
            key: 4,
            title: '数量'
        },
        {
            key: 5,
            title: '金额'
        },
        {
            key: 6,
            title: '操作'
        }
    ];
    const [dataSource, setDataSource] = useState([
        {
            id: 'xxxxxxx1',
            shop: '哈哈哈店1',
            thumbnail: testImg,
            desc: '哈哈哈哈哈哈哈这是一件商品1',
            option: 1,
            price: 8888,
            count: 1,
            keyword: '哈哈',
            addTime: '2021-01-10'
        },
        {
            id: 'xxxxxxx2',
            shop: '哈哈哈店2',
            thumbnail: testImg,
            desc: '哈哈哈哈哈哈哈这是一件商品2',
            option: 1,
            price: 8888,
            count: 1,
            keyword: '哈哈',
            addTime: '2021-01-10'
        },
        {
            id: 'xxxxxxx3',
            shop: '哈哈哈店3',
            thumbnail: testImg,
            desc: '哈哈哈哈哈哈哈这是一件商品2',
            option: 1,
            price: 8888,
            count: 1,
            keyword: '哈哈',
            addTime: '2021-01-10'
        },
        {
            id: 'xxxxxxx4',
            shop: '哈哈哈店4',
            thumbnail: testImg,
            desc: '哈哈哈哈哈哈哈这是一件商品2',
            option: 1,
            price: 8888,
            count: 1,
            keyword: '哈哈',
            addTime: '2021-01-10'
        }
    ]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const [pageParams, setPageParams] = useState({
        pageNum: 1,
        pageSize: 5,
        total: 0
    });

    const pagination = {};

    const onChange = () => {
        
    };

    const onSelectChange = () => {
        
    };

    return {
        dataSource,
        columns,
        rowSelection,
        pagination,
        onChange
    };
}