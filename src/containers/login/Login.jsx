import React, { Component } from 'react';
import styles from './login.less';
import cls from 'classnames';
import Header from 'Components/header/Header';
import Footer from 'Components/footer/Footer';
import ScanLogin from './components/ScanLogin';
import AccountLogin from './components/AccountLogin';
import OtherLogin from './components/OtherLogin';
export default class Login extends Component {
    state={
        activeKey: 2,
        tabInfo: [
            {
                key: 1,
                title: '扫描登陆'
            },
            {
                key: 2,
                title: '账号登陆'
            },
            {
                key: 3,
                title: '其他登陆'
            }
        ]
    }
    changeActiveKey = (key) => {
        this.setState({
            activeKey: key
        });
    }
    render() {
        let { activeKey, tabInfo } = this.state;
        return (
            <div className={styles.login}>
                <Header/>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div>登陆心安元素</div>
                    </div>
                    <div className={styles.contentBox}>
                        <div className={styles.imageContainer}>
                            <div className={styles.tabContainer}>
                                <ul className={styles.tabs}>
                                    {
                                        tabInfo.map(item => {
                                            return (
                                                <li 
                                                    key={item.key} 
                                                    className={cls(styles.tabItem, activeKey === item.key ? styles.activeItem : null)}
                                                    onClick={() => this.changeActiveKey(item.key)}
                                                >
                                                    {item.title}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                                <div className={styles.tabContent}>
                                    {activeKey === 1 && <ScanLogin/>}
                                    {activeKey === 2 && <AccountLogin/>}
                                    {activeKey === 3 && <OtherLogin/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
