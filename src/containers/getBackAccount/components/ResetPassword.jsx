import React from 'react';
import styles from '../getBackAccount.less';
import { Form, Input, Button } from 'antd';

const ResetPasswordPart = (props) => {
    const handleSubmit = () => {

    };
    let { getFieldDecorator } = props.form;
    return (
        <div className={styles.resetPassword}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="重置密码">
                    {getFieldDecorator('password', {})(
                        <Input
                            placeholder="输入一个和之前不一样的密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="确认密码">
                    {getFieldDecorator('confirmPassword', {})(
                        <Input
                            placeholder="再次输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={() => props.changeCurrentStep(3)}>下一步</Button>
                </Form.Item>
            </Form>
        </div>
    );
};
const ResetPassword = Form.create()(ResetPasswordPart);
export default ResetPassword;

