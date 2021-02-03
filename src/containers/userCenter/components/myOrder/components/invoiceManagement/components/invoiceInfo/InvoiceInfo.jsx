import React, { Component } from 'react';
import styles from './invoiceInfo.less';
import { Popover } from 'antd';
import cls from 'classnames';
import CompanyInvoiceForm from './components/companyInvoiceForm/CompanyInvoiceForm';
import TipsIcon from 'Images/tips_icon.png';

export default class InvoiceInfo extends Component {
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
        ]
    }

changeActiveKey = (key) => {
    this.setState({
        activeKey: key
    });
}
render() {
    let { activeKey, tabInfo } = this.state;
    const tipContent = (
        <div>
            tips content
        </div>
    );
    const invoiceContent = '增值税普通发票开给小规模纳税人或者开票资料不齐全的购买人，购买人取得后不可以进行进项税额抵扣，若您有什么疑问，请联系贵公司财务确认后再提交开票需求。';
    return (
        <div className={styles.invoiceInfo}>
            <div className={styles.infoPart}>
                <div className={styles.title}>开票信息
                    <Popover content={tipContent}>
                        <img src={TipsIcon}/>
                    </Popover>
                </div>
                <div className={styles.contentPart}>
                    <div className={styles.tabGroup}>
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
                    {activeKey === '1' ? 
                        <div 
                            className={styles.tabContent}
                        >
                            <div className={styles.row}>
                                <span>姓名：</span>
                                <div>XXX</div>
                            </div>
                            <div className={styles.row}>
                                <span>发票类型：</span>
                                <div><span>增值税普通发票</span><Popover content={invoiceContent}><img src={TipsIcon}/></Popover></div>
                            </div>
                        </div> : 
                        <div className={styles.tabContent}>
                            <CompanyInvoiceForm/>
                        </div>
                    }
                    <div className={styles.btns}>
                        <div onClick={() => this.props.changeParenrActiveKey('2')}>邮寄</div>
                        <div onClick={() => this.props.changeParenrActiveKey('3')}>电子发票</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
