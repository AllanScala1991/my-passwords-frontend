
export const loginService = async (username: string, password: string) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    const login = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, requestOptions)
        
    return await login.json();
}