import React, { useState } from 'react';
import styles from './applyForOpen.less';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Icon } from 'antd';

export default function ApplyForOpen() {
    const history = useHistory();
    const shopInfo = [
        {
            key: 1,
            labelName: '字体',
            name: '字主',
            isOpen: false
        },
        {
            key: 2,
            labelName: '图片',
            name: '图片',
            isOpen: false
        },
        {
            key: 3,
            labelName: '视频',
            name: '视频',
            isOpen: false
        },
        {
            key: 4,
            labelName: '设计素材',
            name: '',
            isOpen: false
        },
        {
            key: 5,
            labelName: '办公软件',
            name: '',
            isOpen: false
        },
        {
            key: 6,
            labelName: '音乐',
            name: '',
            isOpen: false
        },
        {
            key: 7,
            labelName: '全通王',
            name: '',
            isOpen: false
        }
    ];
    const [showContent, setShowContent] = useState(1);
    return (
        <>
        { showContent === 1 && <div className={styles.applyForOpen}>
            <div className={styles.partTitle}>代理商信息</div>
            <div className={styles.agentInfo}>
                <div className={styles.labelName}>级别</div>
                <div className={styles.agentName}>
                    <Icon type="sketch" />
                        A级代理商
                </div>
                <div className={styles.btnsPart}>
                    <div className={styles.notOpened} onClick={() => setShowContent(2)}>申请开通代理商</div>
                </div>
            </div>
            <div className={styles.partTitle}>店铺信息</div>
            <div className={styles.shopInfo}>
                {
                    shopInfo.map(item => {
                        return (
                            <div className={styles.agentInfo} key={item.key}>
                                <div className={styles.labelName}>{item.labelName}</div>
                                <div className={styles.agentName}>
                                    <Icon type="sketch" />
                                </div>
                                <div className={styles.btnsPart}>
                                    {item.isOpen ? <div className={styles.opened}>已开通</div> :
                                        <div className={styles.notOpened} onClick={() => setShowContent(3)}>申请开通</div> }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div> }
        {
            showContent === 2 && <div className={styles.agentPart}>
                <div className={styles.goBackBtn} onClick={() => setShowContent(1)}>返回</div>
                <div className={styles.title}>选择代理商级别</div>
            </div>
        }
        {
            showContent === 3 && <div className={styles.shopkeeperPart}>
                成为店主
                <div className={styles.goBackBtn} onClick={() => setShowContent(1)}>返回</div>
            </div>
        }
        </>
    );
}
