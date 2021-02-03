import React from 'react';
import styles from './agentHonor.less';
import { Icon } from 'antd';

export default function AgentHonor() {
    return (
        <div className={styles.agentHonor}>
            <div className={styles.partTitle}>代理商荣誉</div>
            <div className={styles.agentInfo}>
                <div className={styles.labelName}>级别</div>
                <div className={styles.agentName}>
                    <Icon type="sketch" />
                        A级代理商
                </div>
            </div>
        </div>
    );
}
