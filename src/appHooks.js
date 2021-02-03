/*
 * @Description: 
 * @Author: wangc
 * @LastEditors: wangc
 * @Date: 2020-08-06 15:06:58
 * @LastEditTime: 2020-08-20 11:17:26
 */
import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { clearToken } from 'Utils/auth';

export default function() {
    const history  = useHistory(); 

    // 用户信息
    const [user, setUser] = useState(null);

    // 保存用户信息
    const saveUser = useCallback((userRes) => {
        // if (!userRes.roleKey) {
        //     userRes.roleKey = getRoleKey(userRes);
        // }

        // userRes.permissions = [];
        // if (userRes.roleKey) {
        //     USER_ROLE_KEY_OPTIONS.forEach(item => {
        //         if (item.value === userRes.roleKey) {
        //             userRes.permissions = item.permissions;
        //         }
        //     });
        // }

        setUser(userRes);
    }, []);

    // 退出登录
    const logout = useCallback(() => {
        // postRevokeToken().finally(() => {
        clearToken();
        message.success('退出登录成功!', 1, () => {
            history.push('/login');
        });
        // });
    }, []);

    useEffect(() => {
        if (user || location.href.includes('/login')) {
            return;
        }

        // 查询用户信息
        const fetchUser = () => {
            // getLoginUserDetail().then(res => {
            //     // res.roleKey = getRoleKey(res);

            //     saveUser(res);
            // });
        };
    
        fetchUser();
    }, [user]);

    return {
        user,
        saveUser,
        logout
    };
}