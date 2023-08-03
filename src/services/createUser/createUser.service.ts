
interface CreateUserModel {
    name: string
    email: string
    username: string
    password: string
}

export const createUserService = async (user: CreateUserModel) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password
        })
    };

    const create = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, requestOptions)
        
    return await create.json();
}