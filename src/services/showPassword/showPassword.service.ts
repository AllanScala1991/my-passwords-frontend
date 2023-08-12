import { ResponseModel } from "../../models/response.model";

export const showPassword = async (passwordId: string) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({
            userId: `${window.localStorage.getItem('id')}`,
            passwordId: passwordId
        })
    }

    const passwords = await fetch(`${import.meta.env.VITE_BACKEND_URL}/password/show`, requestOptions);

    if(passwords.status == 403) {
        window.location.href = "/";
    }
    
    const response: Promise<ResponseModel> = await passwords.json();

    return response
}