interface ICreatePassword {
    title: string
    username: string
    password: string
}

export const createPassword = async ({title, username, password}: ICreatePassword) => {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({
            userId: window.localStorage.getItem("id"),
            title,
            username,
            password
        })
    }

    const createPassword = await fetch(`${import.meta.env.VITE_BACKEND_URL}/password`, requestOptions);

    return await createPassword.json();
}