import React, { Component } from 'react';
import styles from './sendAddress.less';
import { Popover } from 'antd';
import TipsIcon from 'Images/tips_icon.png';
import OrderTable from '../../../../../orderTable/OrderTable';
import AddModal from '../addModal/AddModal';

export default class SendAddress extends Component {
    state = {
        dataSource: [
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            },
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            },
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            },
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            },
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            },
            {
                name: '小明',
                phone: 13552616672,
                address: '四川省成都市高新区交子大道',
                postCode: 615000
            }
        ],
        columns: [
            {
                title: '收件人姓名',
                dataIndex: 'name',
                key: 'name',
                align: 'center'
            },
            {
                title: '电话号码',
                dataIndex: 'phone',
                key: 'phone',
                align: 'center'
            },
            {
                title: '收件地址',
                dataIndex: 'address',
                key: 'address',
                align: 'center'
            },
            {
                title: '邮编',
                dataIndex: 'postCode',
                key: 'postCode',
                align: 'center'
            },
            {
                title: '更多操作',
                dataIndex: 'moreOperation',
                key: 'moreOperation',
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
             <div className={styles.sendAddress}>
                 <div className={styles.infoPart}>
                     <div className={styles.title}>寄送地址
                         <Popover content={tipContent}>
                             <img src={TipsIcon}/>
                         </Popover>
                     </div>
                     <div className={styles.maxAddress}>共1个地址，最多可以保存10个地址</div>
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
                         <span onClick={() => this.handleToggleModal('open')}>新增地址(最多添加10个)</span>
                         <div className={styles.getInvoice}>索要发票</div>
                     </div>
                     {showModal && 
                     <AddModal
                         title={'新增地址'}
                         type={'address'}
                         onCancel={() => this.handleToggleModal('close')}
                         onOk={this.handleAdd}
                     />
                     }
                 </div>
             </div>
         );
     }
}
