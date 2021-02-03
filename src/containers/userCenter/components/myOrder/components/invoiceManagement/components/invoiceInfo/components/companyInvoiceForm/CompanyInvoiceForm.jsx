import React, { Component } from 'react';
import styles from './companyInvoiceForm.less';
import { Form, Input, Button, Checkbox, Radio } from 'antd';

class CompanyInvoice extends Component {
    handleSubmit = () => {

    };
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.companyInvoiceForm}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="发票抬头">
                        {getFieldDecorator('invoiceHeader', {
                            rules: [{ required: true, message: '请输入发票抬头!' }]
                        })(
                            <Input
                                placeholder="请填写发票抬头"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="发票类型">
                        {getFieldDecorator('invoiceType', {
                            rules: [{ required: true, message: '请输入发票抬头!' }]
                        })(
                            <Input
                                placeholder="请填写发票抬头"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="税务登记证号">
                        {getFieldDecorator('invoiceNum', {})(
                            <Input
                                placeholder="请填写税务登记证号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="开户银行名称">
                        {getFieldDecorator('bankName', {})(
                            <Input
                                placeholder="请填写开户银行名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="基本开户账号">
                        {getFieldDecorator('bankNum', {})(
                            <Input
                                placeholder="请填写基本开户账号"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="注册场所地址">
                        {getFieldDecorator('registerAddress', {})(
                            <Input
                                placeholder="请填写注册场所地址"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="注册固定电话">
                        {getFieldDecorator('registerPhone', {})(
                            <Input
                                placeholder="请填写注册固定电话"
                            />,
                        )}
                    </Form.Item>
                </Form> 
            </div>
        );
    }
}
const CompanyInvoiceForm = Form.create()(CompanyInvoice);
export default CompanyInvoiceForm;

