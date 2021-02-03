import React, { Component } from 'react';
import styles from './walletManagement.less';
import cls from 'classnames';
import AddModal from 'Components/addModal/AddModal';
import DeleteModal from 'Components/deleteModal/DeleteModal';
import AddAlipayForm from './components/managementForms/AddAlipayForm';
import AddBackCardForm from './components/managementForms/AddBackCardForm';
import ConstructionBankIcon from 'Images/construction_bank.png';
import AlipayBlueIcon from 'Images/alipay_blue.png';
import AlipayIcon from 'Images/alipay.png';
import AlipayIcon_Active from 'Images/alipay_active.png';
import BankCardIcon from 'Images/bankCard.png';
import BankCardIcon_Active from 'Images/bankCard_active.png';

export default class WalletManagement extends Component {
    state = {
        activeKey: '1',
        tabInfo: [
            {
                key: '1',
                text: '支付宝管理',
                icon: AlipayIcon,
                activeIcon: AlipayIcon_Active
            },
            {
                key: '2',
                text: '银行卡管理',
                icon: BankCardIcon,
                activeIcon: BankCardIcon_Active
            }
        ],
        accountInfo: [
            {
                type: 'alipay',
                typeIcon: AlipayBlueIcon,
                accountId: '967644334'
            },
            {
                type: 'bank',
                typeIcon: ConstructionBankIcon,
                accountId: '1243423424'
            },
            {
                type: 'alipay',
                typeIcon: AlipayBlueIcon,
                accountId: '32545524'
            },
            {
                type: 'bank',
                typeIcon: ConstructionBankIcon,
                accountId: '75357527'
            }
        ], // 已添加的账号信息
        showDeleteModal: false,
        showAlipayModal: false,
        showBankCardModal: false
    };
    changeActiveKey=(key) => {
        this.setState({
            activeKey: key
        });
    }
    // 处理已添加的账号信息
    formatAccount = (info) => {
        if (info && info.length > 0) {
            let { activeKey } = this.state;
            if (activeKey === '1') {
                return info.filter(item => {
                    return item.type === 'alipay';
                });
            } 
            return info.filter(item => {
                return item.type === 'bank';
            });
            
        }
    }
    // 打开关闭新增弹窗
    handleToggleModal = (type, isShow, isDel) => {
        if (type === 'alipay') {
            if (isShow === 'open') {
                this.setState({
                    showAlipayModal: true
                });
            } else {
                this.setState({
                    showAlipayModal: false
                });
            }
        } else if (type === 'bankCard') {
            if (isShow === 'open') {
                this.setState({
                    showBankCardModal: true
                });
            } else {
                this.setState({
                    showBankCardModal: false
                });
            }
        } else if (isShow === 'open') {
            this.setState({
                showDeleteModal: true
            });
        } else if (isDel) {
            // todo
            this.setState({
                showDeleteModal: false
            });
        } else {
            this.setState({
                showDeleteModal: false
            });
        }
        
    }     
    // 新增确认
    handleAdd = (type) => {
        // todo
        this.handleToggleModal(type, 'close');
    }
    render() {
        let { tabInfo, activeKey, accountInfo, showAlipayModal, showBankCardModal, showDeleteModal } = this.state;
        return (
            <div className={styles.walletManagement}>
                <div className={styles.walletHeader}>添加账户</div>
                <div className={styles.walletContent}>
                    <div className={styles.contentTab}>
                        {
                            tabInfo.map(item => {
                                return (
                                    <div 
                                        className={cls(styles.tabItem, activeKey === item.key ? styles.activeItem : null)} 
                                        key={item.key}
                                        onClick={() => this.changeActiveKey(item.key)}
                                    >
                                        <img src={ activeKey === item.key ? item.activeIcon : item.icon}/>
                                        {item.text}
                                    </div>
                                );
                            })
                        }
                    </div>
                    {
                        this.formatAccount(accountInfo).length > 0 ? 
                            <div className={styles.accountList}>
                                {
                                    this.formatAccount(accountInfo).map(item => {
                                        return (
                                            <div className={styles.listItem} key={item.accountId}>
                                                <div className={styles.itemHeader}>
                                                    <div className={styles.left}>
                                                        <img src={item.typeIcon}/>
                                                        <span>{item.type === 'alipay' ? '支付宝' : '银行卡'}</span>
                                                    </div>
                                                    <div>{item.accountId}</div>
                                                </div>
                                                <div className={styles.itemOperation}>
                                                    <div className={styles.edit}>编辑</div>
                                                    <div onClick={() => this.handleToggleModal('', 'open')}>删除</div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div> : null
                    }
                    {
                        showDeleteModal && 
                        <DeleteModal
                            title={'删除账号'}
                            onCancel={() => this.handleToggleModal('', 'close', false)}
                            onOk={() => this.handleToggleModal('', 'close', true)}
                        />
                    }
                    {activeKey === '1' && 
                        <div className={styles.addAccountContent} onClick={() => this.handleToggleModal('alipay', 'open')}>
                            <div className={styles.addIcon}>+</div>
                            <div>添加支付宝账号</div>
                        </div>
                    }
                    {activeKey === '2' && 
                        <div className={styles.addAccountContent} onClick={() => this.handleToggleModal('backCard', 'open')}>
                            <div className={styles.addIcon}>+</div>
                            <div>添加银行卡账号</div>
                        </div>
                    }
                    {
                        showAlipayModal && 
                            <AddModal
                                title={'新增支付宝'}
                                onCancel={() => this.handleToggleModal('alipay', 'close')}
                            >
                                <AddAlipayForm
                                    handleSave={() => this.handleToggleModal('bankCard', 'close')}
                                />
                            </AddModal>
                    }
                    {
                        showBankCardModal && 
                            <AddModal
                                title={'新增银行卡'}
                                onCancel={() => this.handleToggleModal('bankCard', 'close')}
                            >
                                <AddBackCardForm
                                    handleSave={() => this.handleToggleModal('bankCard', 'close')}
                                />
                            </AddModal>
                    }
                </div>
            </div>
        );
    }
}
