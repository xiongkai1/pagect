import React, { useState, useEffect }  from 'react';
import styles from './advertising.less';
import { Input, Select, Button, Table, message } from 'antd';
import { advertisementList, commodityListAll } from 'Services/advertisementinfo';
import { selectShopInfoList } from 'Services/mallinfo';
import Cookies from 'Utils/cookie';

const InputGroup = Input.Group;
const { Option } = Select;

export default function Advertising() {
    const columns = [
        // {
        //     title: '选择',
        //     dataIndex: ''
        // },
        {
            title: '编号',
            dataIndex: 'commodityId'
        },
        {
            title: '缩略图',
            dataIndex: 'coveUrl',
            // eslint-disable-next-line react/no-multi-comp
            render: (text, record, index) => {
                return <img src={text} alt=""/>;
            }
        }, {
            title: '类型',
            dataIndex: 'commodityType'
        }, {
            title: '投放',
            dataIndex: ''
        }

    ];
    const [mallId, setMallId] = useState('');
    const [commodityList, setCommodityList] = useState([]);
    const [value, setValue] = useState('');
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5
    });

    useEffect(() => {
        selectShopInfoListAll();

    }, []);
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
                    commodityListAll({
                        current: pagination.current,
                        size: pagination.pageSize,
                        mallId: mallId,
                        commodityId: value
                    }).then(e => {
                        if (e.data.code === 200) {
                            let data = e.data.data;
                            setCommodityList(data.data);
                            let pagnation = {};
                            pagnation.current = data.current;
                            pagnation.pageSize = data.size;
                            pagnation.total = data.total;
                            console.log(pagnation);
                            setPagination(pagnation);
                        }
                    });
                }
            }
        });
    };

    const [change, setChange] = useState('输入作品编号');

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
    const onChange = (e) => {
       
        let pagnation = {};
        pagnation.current = e.current;
        pagnation.pageSize = e.pageSize;
        pagnation.total = e.total;
        advertisementListAll(pagnation);
    };
    const advertisementListAll = (pagnation) => {
        commodityListAll({
            current: pagnation.current,
            size: pagnation.pageSize,
            mallId: mallId,
            commodityId: value
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

    const rowKey = (e) => {
        return e.id;
    };
    return (
        <div className={styles.advertising}>
            {/* 我要上广告页 */}
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