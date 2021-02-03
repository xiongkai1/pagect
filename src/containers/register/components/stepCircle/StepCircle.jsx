// 注册顶部步骤图
import styles from './stepCircle.less';
import React from 'react';
import cls from 'classnames';

class StepCircle extends React.Component {
    render() {
        let { title, index, isStepActive } = this.props;
        return (
            <div className={styles.stepCircle}>
                <div className={cls(styles.circle, isStepActive ? styles.activeStyle : null)}>
                    {index}
                </div>
                <div className={styles.title} style={isStepActive ? { color: '#e62129' } : {}}>{title}</div>
            </div>
        );
    }
}
export default StepCircle;