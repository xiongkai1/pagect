import React, { useState } from 'react';
import styles from './electronicAddress.less';
import { Form, Input, Button, Checkbox } from 'antd';

const ElectronicAddressPart = ({
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
        <div className={styles.electronicAddressForm}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="邮箱">
                    {getFieldDecorator('mail', {
                        rules: [{ required: true, message: '请填写邮箱!' }]
                    })(
                        <Input
                            placeholder="请填写邮箱"
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
const ElectronicAddressForm = Form.create()(ElectronicAddressPart);
export default ElectronicAddressForm;
