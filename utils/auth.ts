const PASSWORD_KEY = "isAuthenticated";
const PASSWORD = process.env.AUTH_STRING;

export const isAuthenticated = (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(PASSWORD_KEY) === "true";
};

export const authenticate = (password: string): boolean => {
    if (password === PASSWORD) {
        localStorage.setItem(PASSWORD_KEY, "true");
        return true;
    }
    return false;
};

export const logout = (): void => {
    localStorage.removeItem(PASSWORD_KEY);
};
