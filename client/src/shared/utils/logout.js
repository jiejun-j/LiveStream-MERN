export const logout = () => {
    localStorage.removeItem('user');

    // it will cause a full page reload
    window.location.href = '/channels';
}