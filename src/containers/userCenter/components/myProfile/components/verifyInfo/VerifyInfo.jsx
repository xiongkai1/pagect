import React, { Component } from 'react';
import styles from './verifyInfo.less';
import { Popover } from 'antd';
import cls from 'classnames';
import AddInfoModal from './components/addInfoModal/AddInfoModal';
import TipsIcon from 'Images/tips_icon.png';

export default class VerifyInfo extends Component {
    state = {
        activeKey: '1',
        tabInfo: [
            {
                key: '1',
                title: '个人'
            },
            {
                key: '2',
                title: '公司 | 机构 | 组织'
            }
        ],
        showPersonalAddModal: false,
        isPersonalHasInfo: false,
        showCompanyAddModal: false,
        isCompanyHasInfo: false
    }

    changeActiveKey = (key) => {
        this.setState({
            activeKey: key
        });
    }

    toggleModal = (type, modalType) => {
        if (modalType === 'personal') {
            if (type === 'open') {
                this.setState({
                    showPersonalAddModal: true
                });
            } else { 
                this.setState({
                    showPersonalAddModal: false
                });
            }
        } else if (type === 'open') {
            this.setState({
                showCompanyAddModal: true
            });
        } else { 
            this.setState({
                showCompanyAddModal: false
            });
        }
    }

    // 新增确认
    handleAddInfo = (type) => {
        if (type === 'personal') {
            // todo
            this.toggleModal('close', type);
        } else {
            this.toggleModal('close', type);
        }
    }

    render() {
        let { activeKey, tabInfo, showPersonalAddModal, showCompanyAddModal, isPersonalHasInfo, isCompanyHasInfo } = this.state;
        const tipContent = (
            <div>
                tips content
            </div>
        );
        return (
            <div className={styles.verifyInfo}>
                <div className={styles.infoPart}>
                    <div className={styles.title}>完善验证信息
                        <Popover content={tipContent}>
                            <img src={TipsIcon}/>
                        </Popover>
                    </div>
                    <div className={styles.contentPart}>
                        <div className={styles.row}>
                            {
                                tabInfo.map(item => {
                                    return (
                                        <div 
                                            onClick={() => this.changeActiveKey(item.key)}
                                            key={item.key} 
                                            className={cls(styles.tabItem, activeKey === item.key ? styles.activeItem : null)}
                                        >
                                            {item.title}
                                        </div> 
                                    );
                                })
                            }
                        </div>
                        <div className={styles.tabContent}>
                            {
                                activeKey === '1' ? 
                                    <div className={styles.personalContent}>
                                        {
                                            isPersonalHasInfo ? 
                                                <div className={styles.personalWithInfo}>
                                                    <div className={styles.name}>炸弹男孩</div>
                                                    <div className={styles.num}>adbka1635623gdjag</div>
                                                    <div className={styles.vSuccess}>已验证</div>
                                                </div> : 
                                                <div 
                                                    className={styles.addInfo}
                                                    onClick={() => this.toggleModal('open', 'personal')}
                                                >
                                                    <span className={styles.redColor}>+</span>点击添加个人验证信息
                                                </div>
                                        }
                                    </div> : 
                                    <div className={styles.companyContent}>
                                        {
                                            isCompanyHasInfo ? 
                                                <div className={styles.companyWithInfo}>
                                                    <div className={styles.name}>炸弹男孩炸弹公司（adbka1635623gdjag）</div>
                                                    <div className={styles.vSuccess}>已验证</div>
                                                </div> : 
                                                <div 
                                                    className={styles.addInfo}
                                                    onClick={() => this.toggleModal('open', 'company')}
                                                >
                                                    点击添加公司组织机构验证信息
                                                </div>
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                { showPersonalAddModal && 
                    <AddInfoModal 
                        title={'新增个人信息'}
                        type={'personal'}
                        onCancel={() => this.toggleModal('close', 'personal')}
                        onOk={() => this.handleAddInfo('personal')}
                    />
                }
                { showCompanyAddModal && 
                    <AddInfoModal 
                        title={'新增 公司 | 组织 | 机构'}
                        type={'company'}
                        onCancel={() => this.toggleModal('close', 'company')}
                        onOk={() => this.handleAddInfo('company')}
                    />
                }
            </div>
        );
    }
}
