export const LogoutService = () => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    window.location.href = "/"
}