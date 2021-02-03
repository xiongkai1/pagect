import React, { useState, useEffect, useCallback, useContext } from 'react';
import { message } from 'antd';
import { accountLogin } from 'Services/auth';
import { userLogin } from 'Utils/auth';
import Cookies from 'Utils/cookie';
import { useHistory } from 'react-router-dom';
import AppContext from '../../AppContext';

export default function(props) {
    const {
        saveUser
    } = useContext(AppContext);

    const history  = useHistory(); 
    const { form } = props;
    const { getFieldsValue } = form;

    // 记住的账户
    const rememberUserName = Cookies.get('account') || '';

    // 错误提示
    const [error, setError] = useState('');

    // 重置错误信息
    const resetError = useCallback(() => {
        error && setError('');
    }, [error]);

    // btn loading
    const [loading, setLoading] = useState(false);
    
    // 确认登录
    const handleSubmit = (e) => {
        e.preventDefault();

        const fieldsValue = getFieldsValue();

        if (!fieldsValue.account) {
            return setError('请输入登录账号');
        } else if (!fieldsValue.password) {
            return setError('请输入登录密码');
        } 

        accountLogin({
            account: fieldsValue.account,
            password: fieldsValue.password
        }).then(res => {
            let { data } = res;
            if (data.code === 200) {
                if (fieldsValue.rememberMe) {// 记住用户名
                    Cookies.set('account', fieldsValue.account, { expires: 7 });
                }
                saveUser(data.data.user); // 登录后保存用户信息
                userLogin(data.data.token);// 保存token

                message.success(data.msg);
                setLoading(true);
                setTimeout(() => {
                    history.push('/home');
                }, 1000);
            } else {
                setLoading(false);
                message.error(data.msg);
            }
        });
    };

    // 回车登录
    function onKeydown(e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => {
            document.removeEventListener('keydown', onKeydown);
        };
    }, []);

    return {
        loading,
        rememberUserName,
        error,
        resetError,
        handleSubmit
    };
}