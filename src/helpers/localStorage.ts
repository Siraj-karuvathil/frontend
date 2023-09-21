const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN ='refresh_token';

export function setAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN, token);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
}

export function setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN, token);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
}