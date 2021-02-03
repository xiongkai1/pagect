import React, { Component } from 'react';
import styles from './deleteModal.less';
import { Modal } from 'antd';

export default class DeleteModal extends Component {
    render() {
        let { title, onCancel, onOk } = this.props;
        return (
            <div className={styles.deleteModal} id="commonDeleteModal">
                <Modal
                    visible={true}
                    title={title}
                    onCancel={onCancel}
                    onOk={onOk}
                    getContainer={() => document.getElementById('commonDeleteModal')}
                >
                    确认删除吗?
                </Modal>
            </div>
        );
    }
}
