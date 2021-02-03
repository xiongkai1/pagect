import React  from 'react';
import styles from './phoneVerification.less';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';
import hooks from './phoneVerificationHooks';
import { CellphoneCheck } from 'Utils/validator';

const PhoneVerificationPart = (props) => {

    const { 
        countdown,
        isChecked,
        getCode,
        handleChecked,
        handleSubmit
    } = hooks(props);

    const { getFieldDecorator } = props.form;

    const history  = useHistory(); 

    return (
        <div className={styles.phoneVerification}>
            <Form onSubmit={handleSubmit}>
                <Form.Item label="中国+86">
                    {getFieldDecorator('userMobile', {
                        rules: [
                            { required: true, message: '请输入手机号!' },
                            { pattern: CellphoneCheck.pattern, message: '请输入正确的手机号码' }
                        ]
                    })(
                        <Input
                            placeholder="请输入您常用的手机号"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="验证码">
                    {getFieldDecorator('code', {
                        rules: [{ required: true, message: '请输入验证码!' }]
                    })(
                        <Input
                            placeholder="输入验证码"
                        />,
                    )}
                    <div className={styles.getCode} onClick={countdown === 0 ? getCode : () => {message.warning('已获取验证码，请勿重复点击！');}}>
                        { countdown === 0 ?  '获取验证码' : `${Math.round(countdown / 1000)}s`}
                    </div>
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('read', {
                        valuePropName: 'checked',
                        initialValue: false
                    })(<Checkbox onChange={handleChecked}><span className={styles.tips}>我已同意并阅读<a href="">《心安元素用户注册协议》</a></span></Checkbox>)}
                </Form.Item>
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        // onClick={() => props.changeCurrentStep(2)} 
                        disabled={!isChecked} 
                        className={!isChecked ? styles.disabledStyle : null}
                    >
                            下一步
                    </Button>
                    <div className={styles.tips}>我已有账号？我去<a onClick={() => history.push('/login')}>登陆</a></div>
                </Form.Item>
            </Form>
        </div>
    );
};
const PhoneVerification = Form.create()(PhoneVerificationPart);
export default PhoneVerification;
