import Cookies from 'Utils/cookie';

export function userLogin(data) {
    Cookies.set('token', JSON.stringify(data));
}

export function getToken() {
    const data = Cookies.get('token');
    return data && data !== 'null' ? JSON.parse(data).accessToken : null;
}

export function getRefreshToken() {
    const data = Cookies.get('token');
    return data && data !== 'null' ? JSON.parse(data).refreshToken : null;
}

export function clearToken() {
    Cookies.remove('token');
}

// 获取用户角色KEY
export function getRoleKey(user) {
    return user?.authorities && user.authorities.reduce((prev, value) => {
        if (value && value.authority.indexOf('ROLE_') === 0) {
            return value.authority.substr(5);
        }

        return prev;
    }, null);
}