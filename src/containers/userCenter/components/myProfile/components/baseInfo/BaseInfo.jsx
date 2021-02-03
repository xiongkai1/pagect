import React, { Component } from 'react';
import styles from './baseInfo.less';
import { Form, Input, Button, Select } from 'antd';
import Cookies from 'Utils/cookie';
import { basicInformation } from 'Services/userCenter';

const { Option } = Select;
const { TextArea } = Input;

class BaseInfoPart extends Component {
    constructor() {
        super();
        this.state = { 
            userInfo: {},
            modifyBtn: false
        };

        basicInformation({
            account: Cookies.get('account')
        }).then(res => {
            console.log(res); 
            if (res.data.code === 200) {
                this.setState({
                    userInfo: res.data.data
                });

            } else {
                message.error('未知异常!');
            }
            
        });
    }
    onChange(e) {
        console.log(e.target.name);
        console.log(e.target.value);
        // this.setState({
        //     [e.target.name]: e.target.value
        // });

    }

    componentDidMount() {
        
    }
    handleSubmit = () => {
        console.log('基本信息');

    };
    handleSave = () => {
        console.log(' 基本信息1 ');
    };
    // 修改
    modify = () => {
        console.log('修改');
        if (!this.state.modifyBtn) {
            this.setState({
                modifyBtn: true
            });
        } else {
            this.setState({
                modifyBtn: false
            });
        }
    }
    handleLogInfoSave = () => {
        console.log(' 修改1 ');
    }
    render() {
        // 获取cookis
        let { getFieldDecorator } = this.props.form;
        let userSex;
        let modifyContent;
        if (this.state.userInfo.userSex === 1) {
            userSex = (
                <span>男</span>
            );
        } else {
            userSex = (
                <span>女</span>
            );
        }

        if (!this.state.modifyBtn) {
            modifyContent = (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="邀请码">
                        {this.state.userInfo.invitationCode}
                    </Form.Item>
                    <Form.Item label="用户名">
                        <span>{this.state.userInfo.userName}</span>
                    </Form.Item>
                    <Form.Item label="性别">
                        <span>{userSex}</span>
                    </Form.Item>
                    <Form.Item label="生日">
                        <span>{this.state.userInfo.userBirthday}</span>
                    </Form.Item>
                    <Form.Item label="居住地址">
                        <span>{this.state.userInfo.userDress}</span>
                    </Form.Item>
                    <Form.Item label="自我简介">
                        <span>{this.state.userInfo.userIntroduce}</span>
                    </Form.Item>
                    <Form.Item className={styles.saveBtn}>
                        <Button className={styles.modifyBtn} type="primary" onClick={this.modify}>修改</Button>
                        <Button type="primary" htmlType="submit" onClick={this.handleSave}>保存</Button>
                    </Form.Item>
                </Form>
            );
        } else {
            modifyContent = (
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="邀请码">
                        <span className={styles.text}>{this.state.userInfo.invitationCode}</span> 
                        <span className={styles.below}>(123123)</span>
                    </Form.Item>
                    <Form.Item label="用户名" >
                        <Input 
                            type="userName"
                            value={this.state.userInfo.userName} 
                            name = "userInfo.userName"
                            onChange={this.onChange.bind(this)}
                        />
                    </Form.Item>
                    <Form.Item label="性别">
                        <span>{userSex}</span>
                    </Form.Item>
                    <Form.Item label="生日">
                        <span>{this.state.userInfo.userBirthday}</span>
                    </Form.Item>
                    <Form.Item label="居住地址">
                        <span>{this.state.userInfo.userDress}</span>
                    </Form.Item>
                    <Form.Item label="自我简介">
                        <span>{this.state.userInfo.userIntroduce}</span>
                    </Form.Item>
                    <Form.Item className={styles.saveBtn}>
                        <Button className={styles.modifyBtn} type="primary" onClick={this.modify}>修改</Button>
                        <Button type="primary" htmlType="submit" onClick={this.handleSave}>保存</Button>
                    </Form.Item>
                </Form>
            );
        }

        return (
           
            <div className={styles.baseInfo}>
               
                <div className={styles.formPart}>
                    
                    <div className={styles.title}>基本信息</div>

                    {modifyContent}
                </div>
                <div className={styles.avatarPart}> </div>
            </div>
        );
    }
}
const BaseInfo = Form.create()(BaseInfoPart);
export default BaseInfo;
