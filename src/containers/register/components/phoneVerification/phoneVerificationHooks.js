import React, { useState, useEffect, useContext } from 'react';
import { message } from 'antd';
import { useCountDown } from 'ahooks';
import { getPhoneCode, phoneVerification } from 'Services/auth';

export default function(props) {

    const { form, setPhoneInfo } = props;
    const { getFieldsValue, validateFields } = form;

    // 是否选中复选框
    const [isChecked, setChecked] = useState(false);

    // 倒计时相关
    const [countdown, setTargetDate] = useCountDown();
    
    // 确认手机验证
    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, values) => {
            let { userMobile, code } = values;
            if (!err) {
                setPhoneInfo(userMobile, code);
                phoneVerification({
                    userMobile,
                    code
                }).then(() => {
                    props.changeCurrentStep(2); 
                });
            }
        });
    };

    // 获取验证码
    const getCode = () => {
        const { userMobile } = getFieldsValue();
        if (!userMobile) {
            message.warning('请输入手机号码!');
            return;
        }
        getPhoneCode({
            userMobile
        }).then((res) => {
            if (res?.data?.code === 200) {
                message.success(res?.data?.msg ?? '获取成功请稍等!');
                countDown();
            } else {
                message.error(res?.data?.msg ?? '未知异常!');
            }
        });
    };

    // 验证码倒计时
    const countDown = () => {
        setTargetDate(Date.now() + 60000);
    };

    // 复选框选中事件
    const handleChecked = (e) => {
        setChecked(e.target.checked);
    };

    return {
        countdown,
        isChecked,
        getCode,
        handleChecked,
        handleSubmit
    };
}