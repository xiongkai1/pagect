import React from 'react';
import styles from './agentInfo.less';
import { useHistory } from 'react-router-dom';

const AgentInfo = () => {
    const history  = useHistory(); 
    return (
        <div className={styles.agentInfo}>
            <div className={styles.infoPart}>
                <div className={styles.title}>代理商入驻信息</div>
                <div className={styles.contentPart}>
                    <div className={styles.row}>
                        <span className={styles.tit}>入驻时间：</span>
                        {/* <div className={styles.cnt}>2020年09月01日</div> */}
                        <span className={styles.cnt}><a onClick={() => history.push('/userCenter/7')}>申请成为</a></span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.tit}>级别：</span>
                        <span className={styles.cnt}>B级代理商/市场管理人员</span>
                        {/* <div className={styles.cnt}><a onClick={() => history.push('/userCenter/7')}>我要晋升</a></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AgentInfo;
