import React, { useState, useEffect } from 'react';
import styles from './documentUploading.less';
import { Input, Select, Button, Table, message } from 'antd';
import { selectShopInfoList } from 'Services/mallinfo';
import { shopCommodityList } from 'Services/commodityinfo';
import Cookies from 'Utils/cookie';

const InputGroup = Input.Group;
const { Option } = Select;

export default function DocumentUploading() {
    
    const columns = [
        // {
        //     title: '序号',
        //     dataIndex: 'id'
        // },
        {
            title: '编号',
            dataIndex: 'id'
        },
        {
            title: '缩略图',
            dataIndex: 'coverUrl',
            // eslint-disable-next-line react/no-multi-comp
            render: (text, record, index) => {
                return <img src={text} alt=""/>;
            }
        },
        {
            title: '标题',
            dataIndex: 'commName'
        },
        {
            title: '描述',
            dataIndex: 'specsInfo'
        },
        {
            title: '格式|大小',
            dataIndex: 'mallId'
        },
        {
            title: '原价',
            dataIndex: 'detailsData[0].AUTHORIZATION_PRICE'
        },
        {
            title: '促销价',
            dataIndex: 'detailsData[0].AUTHORIZATION_PRICE_SELL'
        },
        // {
        //     title: '分润',
        //     dataIndex: 'mallId3'
        // },
        {
            title: '操作状态',
            dataIndex: '',
            render: (text, record, index) => {
                let recor;
             
                recor = <div className={styles.state}>
                    <div className={styles.grounding}>
                        <Button  onClick={groundingClick} size="small" type={record.commodityStatus === '5' ? 'danger' : null}>上架</Button>
                        <Button  onClick={undercarriageClick} size="small" type={record.commodityStatus === '6' ? 'danger' : null}>下架</Button>
                    </div>
                    <div className={styles.edit}>
                        <Button size="small" >在仓</Button>
                        <Button size="small" >编辑</Button>
                        <Button size="small" >删除</Button>
                        <Button size="small" >刷新</Button>
                    </div>
                </div>;               
                return recor; 
            }
        },
        {
            title: '存证',
            dataIndex: 'mallId5'
        }
    ];

    const [change, setChange] = useState('输入作品编号');
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5
    });
    // 搜索
    const [value, setValue] = useState('');
    const [mallId, setMallId] = useState('');
    const [commodityList, setCommodityList] = useState([]);

    // 店铺id
    useEffect(() => {
        selectShopInfoListAll();

    }, []);
    const groundingClick = (e) => {
        console.log(e);
    };
    const undercarriageClick = (e) => {
        console.log(e);
    };
    const selectShopInfoListAll = () => {
        // 获取店铺id
        selectShopInfoList({
            current: 1,
            size: 5,
            userId: Cookies.get('userId')
        }).then(e => {
            let data = e.data.data;
            if (e.data.code === 200) {
                if (data.records.length === 0) {
                    message.error('你还没有店铺,请去申请店铺');
                }
                let mallId = '';
                data.records.forEach(data => {
                    if (data.shopTypeCode === 1) {
                        mallId = data.shopTypeId;
                        setMallId(data.shopTypeId);
                    }
                });

                if (mallId !== '') {
                    shopCommodityList({
                        commTypeId: 'OFFICE ',
                        current: pagination.current,
                        size: pagination.pageSize,
                        mallId: mallId,
                        condition: value
                    }).then(e => {
                        if (e.data.code === 200) {
                            let data = e.data.data;
                            setCommodityList(data.data);
                            let pagnation = {};
                            pagnation.current = data.current;
                            pagnation.pageSize = data.size;
                            pagnation.total = data.total;
                            setPagination(pagnation);
                        }
                        
                    });
                }
            }
        });
    };
    const shopCommodityListAll = (pagnation) => {
        shopCommodityList({
            commTypeId: 'OFFICE',
            current: pagnation.current,
            size: pagnation.pageSize,
            mallId: mallId,
            condition: value
        }).then(e => {
            if (e.data.code === 200) {
                let data = e.data.data;
                setCommodityList(data.data);
                let pagnation = {};
                pagnation.current = data.current;
                pagnation.pageSize = data.size;
                pagnation.total = data.total;
                setPagination(pagnation);
            }
            
        });
    };
    const handleChange = (e) => {
       
        if (e === '1') {
            setChange('输入作品编号');
        }
        if (e === '2') {
            console.log(e);
            setChange('输入作品名称');
        }
        if (e === '3') {
            setChange('输入关键字');
        }
    };
    const onChange = (e) => {
        let pagnation = {};
        pagnation.current = e.current;
        pagnation.pageSize = e.pageSize;
        pagnation.total = e.total;
        shopCommodityListAll(pagnation);
    };
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
        })
    };
    const searchChange = (e) => {
        setValue(e.target.value);
    };
    const rowKey = (e) => {
        return e.id;
    };
    return (
        <div className={styles.documentUploading}>
            {/* 办公文档上传页 */}
            <div className={styles.top}>
                <InputGroup compact>
                    <Select defaultValue="1" onChange={handleChange}>
                        <Option value="1">作品编号</Option>
                        <Option value="2">作品名称</Option>
                        <Option value="3">关键词</Option>
                    </Select>
                    <Input
                        style={{
                            width: 30,
                            borderLeft: 0,
                            pointerEvents: 'none',
                            backgroundColor: '#fff'
                        }}
                        disabled
                    />
                    <Input onChange={searchChange} value={value} style={{ width: 200, textAlign: 'left', borderLeft: 0 }} placeholder={change} />
                    <Button type="danger">搜索</Button>
                </InputGroup>
            </div>
            <div className={styles.content}>
                <Table 
                    rowSelection ={rowSelection}
                    columns={columns} 
                    dataSource={commodityList} 
                    size="middle" 
                    align="center"
                    pagination={pagination}
                    rowKey = {rowKey}
                    onChange ={onChange}
                />
            </div>
        </div>
    );
}