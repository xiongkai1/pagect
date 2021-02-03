import React, { Component } from 'react';
import styles from './addInfoModal.less';
import { Modal } from 'antd';
import AddPersonalForm from '../modalForm/AddPersonalForm';
import AddCompanyForm from '../modalForm/AddCompanyForm';

export default class AddInfoModal extends Component {
    render() {
        let { title, type = 'personal', onCancel, onOk } = this.props;
        return (
            <div className={styles.addInfoModal} id="addInfoModal">
                <Modal
                    title={title}
                    visible={true}
                    footer={null}
                    onCancel={onCancel}
                    getContainer={() => document.getElementById('addInfoModal')}
                >
                    {type === 'personal' ? 
                        <div className={styles.modalContent}>
                            <AddPersonalForm
                                handleOk={onOk}
                            />
                        </div> :
                        <div className={styles.modalContent}>
                            <AddCompanyForm
                                handleOk={onOk}
                            />
                        </div>     
                    }
                </Modal>
            </div>
        );
    }
}
