import React, { useState } from 'react';
import styles from './modalForm.less';
import { Form, Input, Button, Radio } from 'antd';

const AddPersonalPart = ({
    form,
    handleOk
}) => {
    const [genderValue, setGenderValue] = useState('男');
    const handleGenderChange = (e) => {
        setGenderValue(e.target.value);
    };
    const handleSubmit = () => {

    };
    let { getFieldDecorator } = form;
    return (
        <div className={styles.modalForm}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="姓名">
                    {getFieldDecorator('name', {})(
                        <Input
                            placeholder="请填写姓名"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="民族">
                    {getFieldDecorator('companyName', {})(
                        <Input
                            placeholder="请填写民族"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="身份证号">
                    {getFieldDecorator('id', {})(
                        <Input
                            placeholder="请填写身份证号"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="性别">
                    <Radio.Group 
                        onChange={handleGenderChange} 
                        defaultValue={'男'}
                    >
                        <Radio value={'男'}>男</Radio>
                        <Radio value={'女'}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="出生日期">
                    {getFieldDecorator('birthDate', {})(
                        <Input
                            placeholder="请填写出生日期"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="地址">
                    {getFieldDecorator('address', {})(
                        <Input
                            placeholder="请填写地址"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="有效期起始时间">
                    {getFieldDecorator('effectiveStartTime', {})(
                        <Input
                            placeholder="请填写有效期起始时间"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="有效期结束时间">
                    {getFieldDecorator('effectiveEndTime', {})(
                        <Input
                            placeholder="请填写有效期结束时间"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="签证机关">
                    {getFieldDecorator('office', {})(
                        <Input
                            placeholder="请填写签证机关"
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
const AddPersonalForm = Form.create()(AddPersonalPart);
export default AddPersonalForm;
