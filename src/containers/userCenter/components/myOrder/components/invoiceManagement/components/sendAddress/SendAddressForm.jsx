import React, { useState } from 'react';
import styles from './sendAddress.less';
import { Form, Input, Button, Checkbox } from 'antd';

const SendAddressPart = ({
    form,
    handleOk
}) => {
    const [isDefaultAddress, setIsDefaultAddress] = useState(false);
    const handleSubmit = () => {

    };
    // 设置为默认地址
    const setDefaultAddress = (e) => {
        setIsDefaultAddress(e.target.checked);
    };
    let { getFieldDecorator } = form;
    return (
        <div className={styles.sendAddressForm}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="收件人">
                    {getFieldDecorator('recipient', {
                        rules: [{ required: true, message: '请填写收件人!' }]
                    })(
                        <Input
                            placeholder="请填写收件人"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="选择区域">
                    {getFieldDecorator('location', {
                        rules: [{ required: true, message: '请输入密码!' }]
                    })(
                        <Input
                            placeholder="建议使用数字+字母组合密码,6-12"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="详细地址">
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: '请填写详细地址!' }]
                    })(
                        <Input
                            placeholder="请填写详细地址"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="联系电话">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '请填写联系电话!' }]
                    })(
                        <Input
                            placeholder="请填写联系电话"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="邮编">
                    {getFieldDecorator('mailCode', {
                        rules: [{ required: true, message: '请填写邮政编号!' }]
                    })(
                        <Input
                            placeholder="请填写邮政编号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Checkbox 
                        onChange={setDefaultAddress} 
                        checked={isDefaultAddress}
                        className={styles.setDefaultAddress}
                    >
                    设置为默认地址
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <div className={styles.okBtn} onClick={handleOk}>确认</div>
                </Form.Item>
            </Form>
        </div>
    );
};
const SendAddressForm = Form.create()(SendAddressPart);
export default SendAddressForm;
