
const LoginStatus = {
    NOT_LOGIN: 'NOT_LOGIN',
    DOING_LOGIN: 'DOING_LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    CHANGE_USER_NAME: 'CHANGE_USER_NAME',
    CHANGE_PWD: 'CHANGE_PWD'
};

export function isLogin(context) {
    return context &&
        ((context.frame && context.frame.isLogin) ||
        (context.login && context.login.status === LoginStatus.LOGIN_SUCCESS));
}

export function autoDirectLogin(request) {
    return (response) => {
        if (response.status === 401 && response.jsonData.code === 101101) {
            location.href = '/logout';
            return false;
        }
    }
}