import React, { Component } from 'react';
import styles from './switch.less';
import cls from 'classnames';

class Switch extends Component {
    render() {
        let { selectId } = this.props;
        return (
            <div className={styles.switchBox}>
                <span className={cls(selectId === 1 ? styles.selectedText : null)}>摄影图片</span>
                <div className={cls(styles.slideBox, selectId === 0 ? styles.greySlideBox : null)}>
                    <div className={cls(styles.slide, selectId === 0 ? styles.greySlide : null )} style={{ left: (selectId === 0 || selectId === 1) ? '3px' : '47%' }} onClick={() => this.props.changeSlide()}></div>
                </div>
                <span className={cls(selectId === 2 ? styles.selectedText : null)}>设计图片</span>
                <span className={cls(styles.text, selectId === 0 ? styles.selectedAll : null)} onClick={() => this.props.selectedAll()}>全选</span>
            </div>
        );
    }
}
export default Switch;