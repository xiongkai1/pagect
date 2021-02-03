import React, { Component } from 'react';
import styles from './addModal.less';
import { Modal } from 'antd';
import SendAddressForm from '../sendAddress/SendAddressForm';
import ElectronicAddressForm from '../electronicAddress/ElectronicAddressForm';

export default class AddModal extends Component {
    render() {
        let { title, type = 'address', onCancel, onOk } = this.props;
        return (
            <div className={styles.addModal} id="userCenterInvoiceAddModal">
                <Modal
                    visible={true}
                    title={title}
                    footer={null}
                    onCancel={onCancel}
                    getContainer={() => document.getElementById('userCenterInvoiceAddModal')}
                >
                    {type === 'address' ? 
                        <div className={styles.modalContent}>
                            <SendAddressForm
                                handleOk={onOk}
                            />
                        </div> :
                        <div className={styles.modalContent}>
                            <ElectronicAddressForm
                                handleOk={onOk}
                            />
                        </div>     
                    }
                </Modal>
            </div>
        );
    }
}
