export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(sessionStorage.getItem('SecretHitlerUser'));
    if (user && user.token) {
        return { 'Authorization':  user.token };
    } else {
        return {};
    }
}
export function currentUser(){
    return JSON.parse(sessionStorage.getItem('SecretHitlerUser'));
}
