import React from 'react';
import styles from './storeInfo.less';
import { useHistory } from 'react-router-dom';

const StoreInfo = () => {
    const history  = useHistory(); 
    const infoHeader = ['板块信息', '开通时间', '到期时间', '店铺状态'];
    const infoContent = [ // status: 1未开通 2已开通
        {
            labelName: '字体店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 2
        },
        {
            labelName: '图片店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 1
        },
        {
            labelName: '视频店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 2
        },
        {
            labelName: '设计元素店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 1
        },
        {
            labelName: '办公文档店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 1
        },
        {
            labelName: '音乐店',
            openingTime: '2020年09月01日',
            endingTime: '2121年09月01日',
            status: 1
        }
    ];
    return (
        <div className={styles.storeInfo}>
            <div className={styles.infoPart}>
                <div className={styles.title}>店主入驻信息</div>
                <div className={styles.contentPart}>
                    <ul className={styles.infoHeader}>
                        {
                            infoHeader.map(item => {
                                return <li key={item}>{item}</li>;
                            })
                        }
                    </ul>
                    <div className={styles.infoContent}>
                        {
                            infoContent.map((item, index) => {
                                return (
                                    <div className={styles.row} key={index}>
                                        <div className={styles.labelName}>
                                            <span>{item.labelName}：</span>
                                        </div>
                                        <div className={styles.openingTime}>{item.openingTime}</div>
                                        <div className={styles.openingTime}>{item.openingTime}</div>
                                        <div className={styles.status}>{item.status === 2 ? <div><a onClick={() => history.push('/userCenter/9')}>续费</a> | 已开通</div> : '未开通'}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default StoreInfo;
