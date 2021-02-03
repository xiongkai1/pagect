import React, { useState, useEffect, useContext } from 'react';
import { message } from 'antd';
import { useCountDown } from 'ahooks';
import { getEmailCode, addBaseInfo } from 'Services/auth';

export default function(props) {
    const { form, getPhoneInfo } = props;

    const { getFieldsValue, validateFields } = form;

    // 倒计时相关
    const [countdown, setTargetDate] = useCountDown();
    
    // 确认基本验证
    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            let { userName, userPassword, emailAddress, emailCode, confirmPassword } = values;
            if (confirmPassword !== userPassword) {
                message.error('密码不一致,请重新输入!');
                return;
            }
            if (!err) {
                addBaseInfo({
                    userMobile: getPhoneInfo().userMobile,
                    userName,
                    userPassword,
                    userEmail: emailAddress,
                    emailCode
                }).then(res => {
                    let { data } = res;
                    if (data.code === 200) {
                        message.success(data.msg);
                        props.changeCurrentStep(3);
                    } else {
                        message.error(data.msg);
                    }
                });
            }
        });
    };

    // 获取验证码
    const getCode = () => {
        const { emailAddress } = getFieldsValue();
        if (!emailAddress) {
            message.warning('请输入邮箱地址!');
            return;
        }
        getEmailCode({
            emailAddress
        }).then((res) => {
            let { data } = res;
            if (data.code === 200) {
                message.success(data.msg);
                countDown();
            } else {
                message.error(data.msg);
            }
        });
    };

    // 验证码倒计时
    const countDown = () => {
        setTargetDate(Date.now() + 60000);
    };

    return {
        countdown,
        getCode,
        handleSubmit
    };
}