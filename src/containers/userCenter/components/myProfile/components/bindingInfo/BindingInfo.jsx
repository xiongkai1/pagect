import React, { Component } from 'react';
import styles from './bindingInfo.less';
import { Form, Input, Button } from 'antd';

class BindingInfoPart extends Component {

    componentDidMount() {
        
    }

    // 手机验证确定
    handleSubmit = () => {

    };

    // 获取验证码
    getVcode = () => {
        // alert('?');
    }

    // 绑定操作
    handleBinding = (type) => {

    }

    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.bindingInfo}>
                <div className={styles.formPart}>
                    <Form onSubmit={this.handleSubmit}>
                        <div className={styles.title}>绑定信息</div>
                        <Form.Item label="手机号">
                            {getFieldDecorator('phone', {})(
                                <Input placeholder={'请输入手机号'} suffix={
                                    <span style={{ fontSize: 18 }} onClick={this.getVcode}>获取验证码</span>
                                }/>,
                            )}
                        </Form.Item>
                        <Form.Item label="验证码">
                            {getFieldDecorator('vcode', {})(
                                <Input placeholder={'请输入验证码'} suffix={
                                    <span style={{ fontSize: 18 }} onClick={this.handleSubmit}>确定</span>
                                }/>,
                            )}
                        </Form.Item>
                        <Form.Item label="微信">
                            {getFieldDecorator('bindingWechat', {})(
                                <Button type="primary" onClick={() => this.handleBinding('weChat')}>绑定微信</Button>
                            )}
                        </Form.Item>
                        <Form.Item label="微博">
                            {getFieldDecorator('bindingWeibo', {})(
                                <Button type="primary" onClick={() => this.handleBinding('weibo')}>绑定微博</Button>
                            )}
                        </Form.Item>
                        <Form.Item label="QQ">
                            {getFieldDecorator('bindingQQ', {})(
                                <Button type="primary" onClick={() => this.handleBinding('qq')}>绑定QQ</Button>
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
const BindingInfo = Form.create()(BindingInfoPart);
export default BindingInfo;
