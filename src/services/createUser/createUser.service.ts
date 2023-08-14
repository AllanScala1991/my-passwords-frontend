
interface ICreateUser {
    name: string
    email: string
    username: string
    password: string
}

export const createUserService = async ({name, email, username, password}: ICreateUser) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            username,
            password
        })
    };

    const create = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, requestOptions)
        
    return await create.json();
}