import React from 'react';
import styles from './myShopSystem.less';
import hooks from './myShopSystemHooks';
import cls from 'classnames';
import OrderTable from '../../../orderTable/OrderTable';
import TypePieChart from './components/charts/TypePieChart';
import InfoLineChart from './components/charts/InfoLineChart';

export default function MyShopSystem() {
    const {
        daysTabInfo,
        tableTabInfo,
        activeDaysKey,
        activeTableKey,
        basicData,
        tableData,
        rowSelection,
        pagination,
        columns,

        changeDaysTab,
        changeTableTab,
        renderStatisticsRow
    } = hooks();

    return (
        <div className={styles.myShopSystem}>
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
                    <div>
                        <span>店铺营业额:</span>
                        <span className={styles.turnover}>{basicData?.turnover}</span>
                    </div>
                    <div>
                        <span>排名:</span>
                        <span style={basicData.diff === 'inc' ? { color: 'red' } : { color: 'green' }}>{basicData?.rank}</span>
                        <span style={basicData.diff === 'inc' ? { color: 'red' } : { color: 'green' }}>▲</span>
                        <span className={styles.explain}>{'(全国店铺销售量排名)'}</span>
                    </div>
                </div>
            </div>
            <div className={styles.chartPart}>
                <div className={styles.leftPart}>
                    <div className={styles.topView}>
                        <span>开通情况</span>
                        <ul>
                            <li>
                                <div className={styles.labelName}>营业额:</div>
                                <div className={styles.value} style={{ color: '#e62129' }}>234234</div>
                            </li>
                            <li>
                                <div className={styles.labelName}>笔数:</div>
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
                    <div className={styles.partTitle}>店铺基础数据</div>
                    <div className={styles.basicData}>
                        <div>
                            <span>关注数：</span>
                            <span>{basicData?.attention}</span>
                        </div>
                        <div>
                            <span>作品收藏：</span>
                            <span>{basicData?.collection}</span>
                        </div>
                        <div>
                            <span>浏览量：</span>
                            <span>{basicData?.view}</span>
                        </div>
                        <div>
                            <span>点赞数：</span>
                            <span>{basicData?.like}</span>
                        </div>
                        <div>
                            <span>打赏笔数：</span>
                            <span>{basicData?.exceptional}</span>
                        </div>
                        <div>
                            <span>转发数：</span>
                            <span>{basicData?.forwarding}</span>
                        </div>
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
                    columns={columns[Number(activeTableKey - 1)]}
                    rowSelection={rowSelection}
                    pagination={pagination}
                />
                {renderStatisticsRow(activeTableKey)}
            </div>
        </div>
    );
}
