import React, { Component } from 'react';
import styles from './baseInfo.less';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
class BaseInfoPart extends Component {

    componentDidMount() {
        
    }
    handleSubmit = () => {

    };
    handleSave = () => {

    }
    handleLogInfoSave = () => {

    }
    render() {
        let { getFieldDecorator } = this.props.form;
        return (
            <div className={styles.baseInfo}>
                <div className={styles.formPart}>
                    <div className={styles.title}>基本信息</div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="邀请码">
                        ABCDEF1234
                        </Form.Item>
                        <Form.Item label="用户名">
                            {getFieldDecorator('username', {})(
                                <span>呵呵</span>
                            )}
                        </Form.Item>
                        <Form.Item label="性别">
                            {getFieldDecorator('gender', {})(
                                <span>男</span>
                            )}
                        </Form.Item>
                        <Form.Item label="生日">
                            {getFieldDecorator('birthday', {})(
                                <span>2020-12-07</span>
                            )}
                        </Form.Item>
                        <Form.Item label="居住地址">
                            {getFieldDecorator('address', {})(
                                <span>四川省成都市飒飒大苏打是否</span>
                            )}
                        </Form.Item>
                        <Form.Item label="自我简介">
                            {getFieldDecorator('profile', {})(
                                <span>暂无介绍</span>
                            )}
                        </Form.Item>
                        {/* <Form.Item className={styles.saveBtn}>
                            <Button type="primary" htmlType="submit" onClick={this.handleSave}>保存</Button>
                        </Form.Item> */}
                    </Form>
                </div>
                <div className={styles.avatarPart}> </div>
            </div>
        );
    }
}
const BaseInfo = Form.create()(BaseInfoPart);
export default BaseInfo;
