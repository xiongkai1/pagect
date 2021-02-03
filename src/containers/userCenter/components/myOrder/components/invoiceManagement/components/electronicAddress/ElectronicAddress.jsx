import React, { Component } from 'react';
import styles from './electronicAddress.less';
import { Popover } from 'antd';
import TipsIcon from 'Images/tips_icon.png';
import OrderTable from '../../../../../orderTable/OrderTable';
import AddModal from '../addModal/AddModal';

export default class ElectronicAddress extends Component {
    state = {
        dataSource: [
            {
                mail: '123456@163.com'
            },
            {
                mail: '123456@163.com'
            },
            {
                mail: '123456@163.com'
            },
            {
                mail: '123456@163.com'
            },
            {
                mail: '123456@163.com'
            }
        ],
        columns: [
            {
                title: '邮箱',
                dataIndex: 'mail',
                key: 'mail',
                width: '70%'
            },
            {
                title: '更多操作',
                dataIndex: 'moreOperation',
                key: 'moreOperation',
                width: '20%',
                align: 'center',
                render: () => {
                    return <div className={styles.operations}>
                        <span>默认地址</span>
                        <span>修改</span>
                        <span>删除</span>
                    </div>;
                }
            }
        ],
        selectedRowKeys: [],
        showModal: false
    }

     // 单选复选
     onSelectChange = (selectedRowKeys) => { 
         this.setState({
             selectedRowKeys
         });
     }

     // 打开关闭新增弹窗
     handleToggleModal = (type) => {
         if (type === 'open') {
             this.setState({
                 showModal: true
             });
         } else {
             this.setState({
                 showModal: false
             });
         }
     }

     // 新增确认
     handleAdd = () => {
         // todo
         this.handleToggleModal('close');
     }

     render() { 
         let { selectedRowKeys, dataSource, columns, showModal } = this.state;
         const tipContent = (
             <div>
           tips content
             </div>
         );
         const rowSelection = {
             selectedRowKeys,
             onChange: this.onSelectChange
         };
         return (
             <div className={styles.electronicAddress}>
                 <div className={styles.infoPart}>
                     <div className={styles.title}>邮箱地址
                         <Popover content={tipContent}>
                             <img src={TipsIcon}/>
                         </Popover>
                     </div>
                     <div className={styles.maxAddress}>共1个邮箱，最多可以保存10个邮箱</div>
                     <div className={styles.tablePart}>
                         <OrderTable
                             dataSource={dataSource}
                             columns={columns}
                             rowSelection={rowSelection}
                             onChange={this.handlePageChange}
                             pagination={false}
                         />
                     </div>
                     <div className={styles.addAddress}>
                         <span className={styles.add}>+</span>
                         <span onClick={() => this.handleToggleModal('open')}>新增邮箱(最多添加10个)</span>
                         <div className={styles.getInvoice}>索要发票</div>
                     </div>
                     {showModal && 
                     <AddModal
                         title={'新增邮箱'}
                         type={'mail'}
                         onCancel={() => this.handleToggleModal('close')}
                         onOk={this.handleAdd}
                     />
                     }
                 </div>
             </div>
         );
     }
}
