import React, { useState } from 'react';

export default function(props) {

    const [phone, setPhone] = useState(null);
    const [phoneCode, setPhoneCode] = useState(null);

    const setPhoneInfo = (phone, code) => {
        setPhone(phone);
        setPhoneCode(code);
    };
    const getPhoneInfo = () => {
        return {
            userMobile: phone,
            code: phoneCode
        };
    };
    return {
        setPhoneInfo,
        getPhoneInfo
    };
}