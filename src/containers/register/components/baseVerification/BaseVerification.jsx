import React from 'react';
import styles from './baseVerification.less';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { EmailCheck, UserNameCheck } from 'Utils/validator';
import hooks from './baseVerificationHooks';

const BaseVerificationPart = (props) => {
    
    const { 
        countdown,
        getCode,
        handleSubmit
    } = hooks(props);

    const { getFieldDecorator, getFieldValue } = props.form;

    const history  = useHistory(); 

    return (
        <div className={styles.baseVerification}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="用户名" hasFeedback>
                    {getFieldDecorator('userName', {
                        rules: [
                            { required: true, message: '请输入用户名!' },
                            { pattern: UserNameCheck.pattern, message: '请输入正确的用户名' }
                        ]
                    })(
                        <Input
                            placeholder="给自己取一个不一样的名字吧"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="设置密码" hasFeedback>
                    {getFieldDecorator('userPassword', {
                        rules: [
                            { required: true, message: '请输入密码!' },
                            { min: 6, message: '至少6位' }, 
                            { pattern: /[a-zA-Z]+/, message: '包含英文' },
                            { pattern: /\d+/, message: '包含数字' },
                            { pattern: /[_]+/, message: '包含下划线' },
                            { max: 20, message: '最多不超过20位' }
                        ]
                    })(
                        <Input
                            placeholder="建议使用数字+字母组合密码,6-12"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="确认密码" hasFeedback validateStatus={!getFieldValue('confirmPassword') ? null : getFieldValue('confirmPassword') === getFieldValue('userPassword') ? 'success' : 'error'}>
                    {getFieldDecorator('confirmPassword', {
                        rules: [
                            { required: true, message: '请再次输入密码!' }
                        ]
                    })(
                        <Input
                            placeholder="再次输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="邮箱" hasFeedback>
                    {getFieldDecorator('emailAddress', {
                        rules: [
                            { required: true, message: '请输入邮箱!' },
                            { pattern: EmailCheck.pattern, message: '请输入正确的邮箱' }
                        ]
                    })(
                        <Input
                            placeholder="输入您常用邮箱"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="邮箱验证码" hasFeedback>
                    {getFieldDecorator('emailCode', {
                        rules: [{ required: true, message: '请输入邮箱验证码!' }]
                    })(
                        <Input
                            placeholder="输入邮箱验证码"
                        />,
                    )}
                    <div className={styles.getCode} onClick={countdown === 0 ? getCode : () => {message.warning('已获取验证码，请勿重复点击！');}}>
                        { countdown === 0 ?  '获取验证码' : `${Math.round(countdown / 1000)}s`}
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {/* <Button type="primary" htmlType="submit" onClick={() => props.changeCurrentStep(3)}> */}
            下一步
                    </Button>
                    <div className={styles.tips}>我已有账号？去<a onClick={() => history.push('/login')}>登陆</a></div>
                </Form.Item>
            </Form>
        </div>
    );
};
const BaseVerification = Form.create()(BaseVerificationPart);
export default BaseVerification;
