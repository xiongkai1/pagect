import React, { useEffect } from 'react';
import styles from '../getBackAccount.less';

const ResetComplied = () => {
    useEffect(() => {
        setTimeout(() => {
            // alert('注册成功！');
        }, 5000);
    }, []);
    return (
        <div className={styles.resetComplied}>
            <div className={styles.firstRow}>恭喜您设置完成</div>
            <div className={styles.secondRow}>这一次一定要记得我奥！</div>
            <div className={styles.goHome}>开启您的旅程</div>
        </div>
    );
};
export default ResetComplied;

