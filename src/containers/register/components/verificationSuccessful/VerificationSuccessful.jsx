import React, { useEffect } from 'react';
import styles from './verificationSuccessful.less';
import { useHistory } from 'react-router-dom';

const VerificationSuccessful = () => {
    const history  = useHistory(); 
    useEffect(() => {
        setTimeout(() => {
            history.push('/home');
        }, 5000);
    }, []);
    return (
        <div className={styles.verificationSuccessful}>
            <div className={styles.firstRow}>恭喜您完成注册</div>
            <div className={styles.secondRow}>成为心安元素平台的一员！</div>
            <div className={styles.goHome} onClick={() => history.push('/home')}>开启您的旅程</div>
        </div>
    );
};
export default VerificationSuccessful;
