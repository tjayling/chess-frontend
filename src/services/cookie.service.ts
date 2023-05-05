export const setCookie = (key: string, value: any, days: number) => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + days);

    document.cookie = `${key}=${value}; expires=${expiryDate.toUTCString()}`
}

export const getCookie = (key: string) => {
    const nameEQ = key + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;

}


export const deleteCookie = (key: string) => {
    setCookie(key, "", -1);
}