import React  from 'react';
import styles from '../getBackAccount.less';
import { Form, Input, Button, Checkbox, message } from 'antd';

const UserInfoPart = (props) => {
    const handleSubmit = () => {

    };
    let { getFieldDecorator } = props.form;
    return (
        <div className={styles.userInfo}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="用户信息">
                    {getFieldDecorator('phone', {})(
                        <Input
                            placeholder="输入注册时的手机号/账号/邮箱"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <div className={styles.sliderPart}>滑动验证</div>
                    {/* 滑动验证todo */}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={() => props.changeCurrentStep(2)}>下一步</Button>
                </Form.Item>
            </Form>
        </div>
    );
};
const UserInfo = Form.create()(UserInfoPart);
export default UserInfo;

