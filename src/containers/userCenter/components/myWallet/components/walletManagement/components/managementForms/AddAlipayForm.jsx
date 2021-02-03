import React, { Component } from 'react';
import styles from './formStyle.less';
import { Form, Input, Select } from 'antd';

class AlipayForm extends Component {
    handleSubmit = (e) => {

    }
    render() {
        let { handleSave, form } = this.props;
        let { getFieldDecorator } = form;
        return (
            <div className={styles.alipayForm}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="支付宝姓名">
                        {getFieldDecorator('alipayName', {})(
                            <Select></Select>
                        )}
                    </Form.Item>
                    <Form.Item label="身份证号码">
                        {getFieldDecorator('id', {})(
                            <div>5133y49y234862395632895</div>
                        )}
                    </Form.Item>
                    <Form.Item label="支付宝账号">
                        {getFieldDecorator('alipayAccount', {
                            rules: [{ required: true, message: '请输入支付宝账号!' }]
                        })(
                            <Input
                                placeholder="请输入支付宝账号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="确认账号">
                        {getFieldDecorator('confirmAcoount', {
                            rules: [{ required: true, message: '请确认支付宝账号!' }]
                        })(
                            <Input
                                placeholder="请确认支付宝账号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div className={styles.saveBtn} onClick={handleSave}>保存</div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const AddAlipayForm = Form.create()(AlipayForm);
export default AddAlipayForm;