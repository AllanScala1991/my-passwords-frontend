export const searchByTitle = async (title: string) => {
    if(title) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
            }
        }
    
        const passwords = await fetch(`${import.meta.env.VITE_BACKEND_URL}/password/${title}`, requestOptions);
    
        return await passwords.json()
    }
}