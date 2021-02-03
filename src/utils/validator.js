/**
 * @desc 主要用于form验证, 可以搭配antDesign的validation使用.
 * message需要动态传参时可以改为function, 如REQUIRED中的message一样, 但注意不要影响其他使用到此对象的地方.
 */

// 用户名验证
export const UserNameCheck = {
    message: '1-15位英文、数字或下划线',
    pattern: /^[a-zA-Z0-9_]{1,15}$/
};
// 用户名验证
export const MsgTitleCheck = [{
    required: true, message: '请填写标题'
}, {
    max: 50, message: tipsMoreN(50)
}];

// 其他角色名，员工名等名字的。。。验证
export const OtherNameCheck = (min = 1, max = 15, text) => {
    return {
        message: `${text}由${min}-${max}位英文、数字、中文或下划线组成`,
        pattern: new RegExp(`^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{${min},${max}}$`)
    };
};
// 登录密码
export const pwdRule = [{
    required: true, message: '密码不能为空'
}, {
    min: 6, message: tipsLessN(6)
}, {
    max: 20, message: tipsMoreN(20)
}, {
    validator: (rule, value, callback) => {
        const space = / /.test(value);
        if (space) {
            callback('不能包含空格');
        }
        const chinese = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/.test(value);
        if (chinese) {
            callback('不能包含中文字符');
        }
        callback();
    }
}];
// 长度不能小于n
export function tipsLessN(n) {
    return `长度不能小于${n}位`;
}
// 长度不能大于n
export function tipsMoreN(n) {
    return `长度不能大于${n}位`;
}

// 必填项验证
export const RequiredCheck = {
    message: function(value = '') {
        return `${value}不能为空`;
    },
    pattern: /^\s*$/g
};
// 邮箱格式验证
export const EmailCheck = {
    message: '邮箱格式不正确',
    pattern: /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};
// 电话格式验证, 如座机
export const PhoneCheck = {
    message: '电话格式不正确',
    pattern: /(^(\d{3,4}[-]?)?\d{7,8})$|^((1[0-9][0-9]\d{8}$))/
};
// 手机格式验证
export const CellphoneCheck = {
    message: '手机格式不正确',
    pattern: /^(1[3-8][0-9])\d{8}$/
};
// 日期格式验证
export const DateCheck = {
    message: '日期格式不正确',
    pattern: /^[0-9]{4}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$/
};
// 身份证格式验证
export const IDcardCheck = {
    message: '身份证格式不正确',
    pattern: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
};
// 金额格式验证
export const PriceCheck = {
    message: '金额格式不正确',
    pattern: /^\d+(\.\d{1,2})?$/
};
// 纯数字验证
export const NumericCheck = {
    message: '请输入数字',
    pattern: /^[-+]?[0-9]+$/
};
// 纯字母验证
export const LetterCheck = {
    message: '请输入英文字符',
    pattern: /^[A-Za-z]+$/
};
// 字母加数字验证
export const LetterNumCheck = {
    message: '请输入英文字符或数字',
    pattern: /^[A-Za-z0-9]+$/
};
// 字母加数字加中文验证
export const LetterNumCNCheck = {
    message: '请输入英文字, 或数字或中文',
    pattern: /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[\w])*$/
};
// 只能输入正整数
export const PositiveInteger = {
    message: '只能输入整数',
    pattern: /^\d+$/
};

// 3-20位字母数字下划线组合
export const VerificationUserName = {
    message: '只能输入3-20位字母开头,以字母数字下划线组合',
    pattern: /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/
};
export const UserPassword = {
    message: '密码由8位字母开头,以字母数字下划线组合',
    pattern: /^[a-zA-Z][a-zA-Z0-9_]{8}$/
};
// 6-20位字母数字下划线组合
export const Password = {
    message: '只能输入6-20位非空格字符',
    pattern: /^\S{6,20}$/
};

// 大于500的数字
export const greaterThan500 = {
    message: '只能输入大于等于500的数字',
    pattern: /([5-9]\d{2}|\d{4,})/
};

