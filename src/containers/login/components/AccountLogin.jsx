import React, { useEffect } from 'react';
import styles from './loginComponentsStyle.less';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import hooks from '../loginHooks';

function AccountLogin(props) {
    const { getFieldDecorator } = props.form;
    const history  = useHistory(); 
    const {
        error,
        loading,
        rememberUserName,
        handleSubmit,
        resetError
    } = hooks(props);

    return (
        <div className={styles.accountLogin}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="用户">
                    {getFieldDecorator('account', {
                        initialValue: rememberUserName
                    })(
                        <Input  
                            maxLength={30} 
                            placeholder="填写注册手机/账号/邮箱"
                            onChange={resetError}
                        />
                    )}
                </Form.Item>
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                        initialValue: ''
                    })(
                        <Input.Password 
                            maxLength={30} 
                            placeholder="请输入密码"
                            onChange={resetError}
                        />
                    )}
                </Form.Item>
                <Form.Item className={styles.remenberPassword} help={error}>
                    {getFieldDecorator('rememberMe', {
                        initialValue: Boolean(rememberUserName),
                        valuePropName: 'checked'
                    })(
                        <Checkbox>记住用户名</Checkbox>
                    )}
                </Form.Item>
                {/* <Form.Item>
                    {getFieldDecorator('rememberMe', {})(
                    <div className={styles.passwordOptions}>
                        <span>忘记密码</span>
                        <span className={styles.remenberPassword}><Checkbox  checked={remember } onChange={rememberPwd}/>记住密码</span>
                    </div>
                    )}
                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} >登录</Button>
                    <div className={styles.tips}>我还没有账号，我要去<a onClick={() => history.push('/register')}>注册</a></div>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Form.create()(AccountLogin);
