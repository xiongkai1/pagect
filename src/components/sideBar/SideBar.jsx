import React, { Component } from 'react';
import styles from './sideBar.less';
import cls from 'classnames';

export default class SideBar extends Component {

    handleChangeActiveKey = (key) => {
        this.props.changeActiveKey(key);
    }
    render() {
        let { menuInfo, activeKey, title } = this.props;
        return (
            <div className={styles.sideBar}>
                <div className={styles.content}>
                    {
                        menuInfo.map(item => {
                            return (
                                <div  
                                    key={item.key}
                                    className={styles.itemContainer}
                                >
                                    <div className={styles.title}>
                                        <img src={item.system.icon}/>
                                        <span>{item.system.title}</span>
                                    </div>
                                    {
                                        item.children.map(item => {
                                            return (
                                                <div 
                                                    key={item.key} 
                                                    onClick={() => this.handleChangeActiveKey(item.key)}
                                                    className={cls(styles.sideBarItem, activeKey === item.key ? styles.activeItem : null)}
                                                >
                                                    {item.text}
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
