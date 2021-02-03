import React, { Component } from 'react';
import styles from './goodsInfo.less';
import { Checkbox, Select, Input, InputNumber, Pagination, Popconfirm } from 'antd';
import hooks from './goodsInfoHooks';

const Option = Select.Option;
export default function GoodsInfo(props) {
    const {
        dataSource,
        columns,
        onChange
    } = hooks(props);
    return (
        <div className={styles.goodsInfo} >
            <div className={styles.goodsInfoHeader} id="goodsInfoHeader">
                <Select defaultValue={'店名'} getPopupContainer={() => document.getElementById('goodsInfoHeader')}>
                    <Option value={'店名'}>店名</Option>
                    <Option value={'产品'}>产品</Option>
                </Select>
                <Input placeholder={'输入关键词'}/>
                <div className={styles.searchBtn}>搜索</div>
            </div>
            <div className={styles.goodsInfoContent}>
                <div className={styles.contentHeader}>
                    {
                        columns.map(item => {
                            return (
                                <div key={item.key}>{item.title}</div> 
                            );
                        })
                    }
                </div>
                <div className={styles.contentRows}>
                    {
                        dataSource.length > 0 ? dataSource.map(item => {
                            return (
                                <div className={styles.row} key={item.id}>
                                    <div className={styles.shop}>
                                        <Checkbox></Checkbox>
                                        {item.shop}
                                    </div>
                                    <div className={styles.rowContent}>
                                        <div className={styles.info}>
                                            <Checkbox></Checkbox>
                                            <div className={styles.thumbnail}>
                                                <img src={item.thumbnail} alt=""/>
                                            </div>
                                            <div className={styles.desc}>{item.desc}</div>
                                        </div>
                                        <div className={styles.option}>
                                            <Select defaultValue={'图-RF'} getPopupContainer={() => document.getElementById('goodsInfoHeader')}>
                                                <Option value={'图-RF'}>图-RF</Option>
                                            </Select>
                                        </div>
                                        <div className={styles.price}> {`￥${item.price}`}</div>
                                        <div className={styles.count}>
                                            <InputNumber min={1} max={10} defaultValue={item.count}/>
                                        </div>
                                        <div className={styles.rowTotalPrice}>
                                            {`￥${(item.price) * (item.count)}`}
                                        </div>
                                        <div className={styles.operations}>
                                            <div>收藏宝贝</div>
                                            <div>
                                                <Popconfirm title="确定删除吗？" okText="确认" cancelText="删除">删除</Popconfirm>
                                            </div>
                                            <div>找相似</div>
                                        </div>
                                    </div>
                                    <div className={styles.addTime}>添加时间：{item.addTime}</div>
                                </div>
                            );
                        }) : '你还没有添加商品噢！'
                    }
                </div>
                <div className={styles.statisticalPart}>
                    <div className={styles.left}>
                        <div>
                            <Checkbox></Checkbox>全选
                        </div>
                        <div className={styles.delSelect}>删除</div>
                        <div className={styles.clearGoods}>清除失效宝贝</div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.selectedCount}>已选商品<span>1</span>件</div>
                        <div className={styles.totalPrice}>总计：￥<span>8888</span></div>
                        <div className={styles.settlementBtn}>结算</div>
                    </div>
                </div>
                <div className={styles.paginationPart}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    );
}
