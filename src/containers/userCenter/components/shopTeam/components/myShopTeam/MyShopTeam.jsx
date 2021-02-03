import React from 'react';
import styles from './myShopTeam.less';
import { Select, Input } from 'antd';
import hooks from './myShopTeamHooks';
import cls from 'classnames';
import OrderTable from '../../../orderTable/OrderTable';
import TypePieChart from './components/charts/TypePieChart';
import InfoLineChart from './components/charts/InfoLineChart';

const { Option } = Select;
export default function MyShopTeam() {
    const {
        daysTabInfo,
        tableTabInfo,
        activeDaysKey,
        searchOptions,
        activeTableKey,
        basicData,
        areaData,
        tableData,
        rowSelection,
        pagination,
        columns,

        changeDaysTab,
        changeTableTab
    } = hooks();

    return (
        <div className={styles.myShopTeam}>
            <div className={styles.daysTabRow}>
                <ul className={styles.leftTab}>
                    {
                        daysTabInfo.map(item => {
                            return (
                                <li 
                                    key={item.key} 
                                    className={activeDaysKey === item.key ? styles.activeItem : null}
                                    onClick={() => changeDaysTab(item.key)}
                                >
                                    {item.text}
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={styles.rightInfo}>
                    <div className={styles.searchPart}>
                        <Select defaultValue={searchOptions[0].value}>
                            {
                                searchOptions.map(item => {
                                    return (
                                        <Option key={item.key}>{item.text}</Option>
                                    );
                                })
                            }
                        </Select>
                        <Input placeholder={'输入店铺ID/店铺名称'}/>
                        <div className={styles.searchBtn}>搜索</div>
                    </div>
                    <div>
                        <span>团队营业额:</span>
                        <span className={styles.turnover}>{basicData?.turnover}</span>
                    </div>
                </div>
            </div>
            <div className={styles.chartPart}>
                <div className={styles.leftPart}>
                    <div className={styles.topView}>
                        <span>店铺总数：<span style={{ color: 'red' }}>{basicData?.shopTotal}</span></span>
                        <ul>
                            <li>
                                <div className={styles.labelName}>营业额:</div>
                                <div className={styles.value} style={{ color: '#e62129' }}>234234</div>
                            </li>
                            <li>
                                <div className={styles.labelName}>店铺数:</div>
                                <div className={styles.value} style={{ color: '#45b67c' }}>23</div>
                            </li>
                            <li>
                                <div className={styles.labelName}>最高单价:</div>
                                <div className={styles.value} style={{ color: '#f08920' }}>900.00</div>
                            </li>
                            <li>
                                <div className={styles.labelName}>最低单价:</div>
                                <div className={styles.value} style={{ color: '#3d7e9e' }}>1.00</div>
                            </li>
                            <li>
                                <div className={styles.labelName}>平均单价:</div>
                                <div className={styles.value} style={{ color: '#e40082' }}>481.06</div>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.chartContent}>
                        <div className={styles.piePart}>
                            <TypePieChart/>
                        </div>
                        <div className={styles.linePart}>
                            <InfoLineChart/>
                        </div>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <div className={styles.partTitle}>店铺区域</div>
                    <div className={styles.basicData}>
                        {
                            areaData.map(item => {
                                return (
                                    <div key={item.key}>
                                        <span className={styles.area}>{item.key}、{item.area}：</span>
                                        <span>{item.value}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.tableContent}>
                <div className={styles.tabPart}>
                    {
                        tableTabInfo.map(item => {
                            return (
                                <div 
                                    key={item.key} 
                                    className={cls(styles.tabItem, activeTableKey === item.key ? styles.activeItem : null)}
                                    onClick={() => changeTableTab(item.key)}
                                >
                                    {item.text}
                                </div>
                            );
                        })
                    }
                </div>
                <OrderTable
                    dataSource={tableData}
                    columns={columns}
                    rowSelection={rowSelection}
                    pagination={pagination}
                />
            </div>
        </div>
    );
}
