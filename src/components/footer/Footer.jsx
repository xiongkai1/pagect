import styles from './footer.less';
import React from 'react';

/**
 * @desc 页面底部组件
 */
export default function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                ©2020 湖南心安元素数字科技有限公司 www.xinanyuansu.com 版权所有
            </div>
        </div>
    );
}
