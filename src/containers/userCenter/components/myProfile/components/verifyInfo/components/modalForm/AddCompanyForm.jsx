import React, { useState } from 'react';
import styles from './modalForm.less';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { TextArea } = Input;
const AddCompanyPart = ({
    form,
    handleOk
}) => {
    const handleSubmit = () => {

    };
    let { getFieldDecorator } = form;
    return (
        <div className={styles.modalForm}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="注册号">
                    {getFieldDecorator('registerNum', {})(
                        <Input
                            placeholder="请填写注册号"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="公司名称">
                    {getFieldDecorator('companyName', {})(
                        <Input
                            placeholder="请填写公司名称"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="公司类型">
                    {getFieldDecorator('companyType', {})(
                        <Select
                            placeholder="请填写公司类型"
                        ></Select>,
                    )}
                </Form.Item>
                <Form.Item label="公司法人">
                    {getFieldDecorator('frName', {})(
                        <Input
                            placeholder="请填写公司法人"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="公司注册日期">
                    {getFieldDecorator('registerDate', {})(
                        <DatePicker
                            placeholder="请选择公司注册日期"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="营业期限日期">
                    {getFieldDecorator('rangeDate', {})(
                        <Select
                            placeholder="请选择营业期限日期"
                        ></Select>,
                    )}
                </Form.Item>
                <Form.Item label="公司地址">
                    {getFieldDecorator('companyAddress', {})(
                        <Input
                            placeholder="请填写公司地址"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="注册资本">
                    {getFieldDecorator('registerCapital', {})(
                        <Input
                            placeholder="请填写注册资本"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="经营范围">
                    {getFieldDecorator('businessRange', {})(
                        <TextArea
                            placeholder="请填写经营范围"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className={styles.okBtn} onClick={handleOk}>确认</div>
                </Form.Item>
            </Form>
        </div>
    );
};
const AddCompanyForm = Form.create()(AddCompanyPart);
export default AddCompanyForm;
