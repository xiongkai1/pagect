import React, { Component } from 'react';
import styles from './formStyle.less';
import { Form, Input, Select } from 'antd';

class BackCardForm extends Component {
    handleSubmit = (e) => {

    }
    render() {
        let { handleSave, form } = this.props;
        let { getFieldDecorator } = form;
        return (
            <div className={styles.bankCardForm}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="开户人姓名">
                        {getFieldDecorator('name', {})(
                            <Select></Select>
                        )}
                    </Form.Item>
                    <Form.Item label="身份证号码">
                        {getFieldDecorator('id', {})(
                            <div>5133y49y234862395632895</div>
                        )}
                    </Form.Item>
                    <Form.Item label="选择银行">
                        {getFieldDecorator('bank', {})(
                            <Select></Select>
                        )}
                    </Form.Item>
                    <Form.Item label="银行卡卡号">
                        {getFieldDecorator('bankId', {
                            rules: [{ required: true, message: '请输入银行卡卡号!' }]
                        })(
                            <Input
                                placeholder="请输入银行卡卡号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="确认卡号">
                        {getFieldDecorator('confirmBankId', {
                            rules: [{ required: true, message: '请确认银行卡卡号!' }]
                        })(
                            <Input
                                placeholder="请确认银行卡卡号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="开户行信息">
                        {getFieldDecorator('bankInfo', {})(
                            <div></div>
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
const AddBackCardForm = Form.create()(BackCardForm);
export default AddBackCardForm;