import React from 'react';
import styles from './loginComponentsStyle.less';
import { useHistory } from 'react-router-dom';

const ScanLogin = (props) => {
    const history  = useHistory(); 
    return (
        <div className={styles.scanLogin}>
            <div className={styles.qrCodeBox}>
                <div className={styles.qrCode}></div>
            </div>
            <div className={styles.tips}>使用心安元素APP、微信、QQ、扫描登陆</div>
            <div className={styles.tips}>我还没有账号，我要去<a onClick={() => history.push('/register')}>注册</a></div>
        </div>
    );
};
export default ScanLogin;
