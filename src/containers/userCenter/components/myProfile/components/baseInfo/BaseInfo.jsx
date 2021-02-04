import React, { Component } from 'react';
import styles from './baseInfo.less';
import { Form, Input, Button, Select, DatePicker  } from 'antd';
import Cookies from 'Utils/cookie';
import { basicInformation } from 'Services/userCenter';
import { physicalAddress } from 'Services/userAddress';

const { Option } = Select;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class BaseInfoPart extends Component {
    constructor() {
        super();
        this.state = { 
            userInfo: {},
            modifyBtn: false,
            userSex: '',
            // 国家
            country: [],
            province: [],
            city: [],
            region: [],
            secondProvince: '',
            secondCity: '',
            secondRegion: ''

        };
        this.changeState = this.changeState.bind(this);

        // 获取用户信息
        basicInformation({
            account: Cookies.get('account')
        }).then(res => {
            if (res.data.code === 200) {
                this.setState({
                    userInfo: res.data.data
                });
                if (this.state.userInfo.userSex === 1) {
                    this.setState({
                        userSex: '男'
                    });
                } else if (this.state.userInfo.userSex === 2) {
                    this.setState({
                        userSex: '女'
                    });
                } else {
                    // 说明userSex不存在;

                }

            } else {
                message.error('未知异常!');
            }
            
        });

        // 获取地址  ----- 国家
        physicalAddress({
            cityId: 1
        }).then(res => {
            if (res.data.code === 200) {
                // 获取国家
                this.setState({
                    country: [res.data.data.oneLevel]
                });
                
                // 获取省
                this.setState({
                    province: res.data.data.twoLevel
                });

            }
        });
    }
    // 文本输入
    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // 时间选择器
    dateOnChange(date, dateString) {
        // this.changeState('userInfo', 'userSex', value);
    }

    // 下拉
    fetchUser() {

    }
    changeState(type, type_chiled, data) {
        let start = { ...this.state };
        start[type][type_chiled] = data;
        this.setState({
            ...start
        });
        return false;
    }
    handleChange(value) {
        if (this.state.userInfo.userSex === '' || this.state.userInfo.userSex === 0 ) {
            this.changeState('userInfo', 'userSex', value);
            if (this.state.userInfo.userSex === '1') {
                this.setState({
                    userSex: '男'
                });
            } else if (this.state.userInfo.userSex === '2') {
                this.setState({
                    userSex: '女'
                });
            }
        }

    }

    provinceChange(value, key) {
        this.setState({
            secondProvince: key.props.children
        });
        this.setState({
            city: []
        });
        physicalAddress({
            cityId: value
        }).then(res => {
            if (res.data.code === 200) {
                // 区
                this.setState({
                    city: res.data.data.fourLevel,
                    secondCity: res.data.data.fourLevel[0].cname
                });
                this.setState({
                    region: []
                });

                physicalAddress({
                    provinceId: this.state.city[0].id
                }).then(res => {
                    if (res.data.code === 200) {
                      
                        // 城市
                        this.setState({
                            region: res.data.data.threeLevel,
                            secondRegion: res.data.data.threeLevel[0].cname
                        });
                    }
                });
            }
            
        });

    }
    provinceCity(value, key) {
        this.setState({
            region: []
        });
        // console.log();
        // 判断点的是哪个城市
        this.setState({
            secondCity: key.props.children
        });
        physicalAddress({
            provinceId: value
        }).then(res => {
            if (res.data.code === 200) {
                // 城市
               
                this.setState({
                    region: res.data.data.threeLevel,
                    secondRegion: res.data.data.threeLevel[0].cname
                   
                });
            }
        });
    }

    provinceRegion(value, key) {
        this.setState({
            secondRegion: key.props.children
        });

        console.log(this.state.secondProvince + '省' + this.state.secondCity + '市' + this.state.secondRegion + '区');
    }

    dateChange() {

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
        let statelen = this.state;
        if (this.state.userInfo.userSex === 1) {
            userSex = (
                <span>男</span>
            );
        } else {
            userSex = (
                <span>女</span>
            );
        }
        let cityContext;

        if (this.state.city.length === 0) {
            cityContext = ('');
        } else {
            cityContext = (
                statelen.city
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
                        <Select 
                            size="default" 
                            value={this.state.userSex} 
                            className ={styles.select}
                            name="userInfo.userSex"
                            filterOption={false}
                            onSearch={this.fetchUser.bind(this)}
                            onChange={this.handleChange.bind(this)}
                            style ={{ width: '530px', height: '40px', lineHeight: '40px', fontSize: '14px' }}
                        >
                            <Option value="1">男</Option>
                            <Option value="2">女</Option>
                        </Select>
                        <div className={styles.belowPos}>选择性别，不可更改</div>
                    </Form.Item>
                    <Form.Item label="生日">
                        {/* <span>{this.state.userInfo.userBirthday}</span> */}
                        <DatePicker onChange={this.dateOnChange.bind(this)} />
                        <div className={styles.belowPos}>你的祝福你，我不想少了我</div>
                    </Form.Item>
                    <Form.Item label="居住地址">
                        <Select 
                            size="default" 
                            value={this.state.country[0].cname}
                            className={styles.country}
                            name="country"
                            filterOption={false}
                            style = {{ width: '100px' }}>
                            {
                                this.state.country.map((item, idx) => (
                                    <Option key = {idx} value={item.cname}>{item.cname}</Option>
                                ))
                            }
                        </Select>
                        <Select 
                            size="default" 
                            value={this.state.secondProvince}
                            className={styles.country}
                            name="province"
                            filterOption={false}
                            onChange={this.provinceChange.bind(this)}
                            style = {{ width: '100px', marginLeft: '20px' }}>
                            {
                                this.state.province.map((item, idx) => (
                                    <Option key = {idx} value={item.id}>{item.cname}</Option>
                                ))
                            }
                        </Select>
                        
                        <Select 
                            size="default" 
                            className={styles.country}
                            name="city"
                            value={this.state.secondCity}
                            filterOption={false}
                            onChange = {this.provinceCity.bind(this)}
                            style = {{ width: '100px' }}>
                            {
                                this.state.city.map((item, idx) => (
                                    <Option key = {idx} value={item.id}>{item.cname}</Option>
                                ))
                            }
                        </Select>
                        <Select 
                            size="default" 
                            value={this.state.secondRegion}
                            className={styles.country}
                            name="region"
                            onChange = {this.provinceRegion.bind(this)}
                            filterOption={false}
                            style = {{ width: '100px' }}>
                            {
                                this.state.region.map((item, idx) => (
                                    <Option key = {idx} value={item.id}>{item.cname}</Option>
                                ))
                            }
                        </Select>
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
