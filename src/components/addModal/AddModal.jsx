import React, { Component } from 'react';
import styles from './addModal.less';
import { Modal } from 'antd';

export default class AddModal extends Component {
    render() {
        let { title, onCancel } = this.props;
        return (
            <div className={styles.addModal} id="userCenterCommonAddModal">
                <Modal
                    visible={true}
                    title={title}
                    footer={null}
                    onCancel={onCancel}
                    getContainer={() => document.getElementById('userCenterCommonAddModal')}
                >
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}
