import React, { Component } from 'react';
import styles from './contactInfo.less';
import { Form, Input, Button } from 'antd';

class ContactInfoPart extends Component {
    componentDidMount() {
        
    }
    handleSubmit = () => {

    };
    handleSave = () => {

    }
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.contactInfo}>
                <div className={styles.formPart}>
                    <Form onSubmit={this.handleSubmit}>
                        <div className={styles.title}>联系信息</div>
                        <Form.Item label="QQ号">
                            {getFieldDecorator('qqNumr', {})(
                                <span>12362946</span>
                            )}
                        </Form.Item>
                        <Form.Item label="微信号">
                            {getFieldDecorator('wechatNum', {})(
                                <span>14124csdv</span>
                            )}
                        </Form.Item>
                        <Form.Item label="手机号码">
                            {getFieldDecorator('phoneNum', {})(
                                <span>135325646</span>
                            )}
                        </Form.Item>
                        <Form.Item label="邮箱">
                            {getFieldDecorator('mail', {})(
                                <span>1232407@163.com</span>
                            )}
                        </Form.Item>
                        <Form.Item label="真实姓名">
                            {getFieldDecorator('truename', {})(
                                <span>对方是个</span>
                            )}
                        </Form.Item>
                        <Form.Item label="身份证号码">
                            {getFieldDecorator('idNum', {})(
                                <span>1470247204742</span>
                            )}
                        </Form.Item>
                        {/* <Form.Item className={styles.saveBtn}>
                            <Button type="primary" htmlType="submit" onClick={this.handleSave}>保存</Button>
                        </Form.Item> */}
                        <div className={styles.title}>更改登陆信息</div>
                        <Form.Item label="新密码">
                            {getFieldDecorator('newpassword', {})(
                                <Input/>,
                            )}
                        </Form.Item>
                        <Form.Item label="确认密码">
                            {getFieldDecorator('confirmpassword', {})(
                                <Input/>,
                            )}
                        </Form.Item>
                        <Form.Item className={styles.saveBtn}>
                            <Button type="primary" htmlType="submit" onClick={this.handleLogInfoSave}>保存</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
const ContactInfo = Form.create()(ContactInfoPart);
export default ContactInfo;
