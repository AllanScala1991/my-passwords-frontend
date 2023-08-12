import { ResponseModel } from "../../models/response.model";

export const updatePasswordById = async (id: string, title: string, username: string, password: string) => {
    console.log(title, username, password)
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({
            id,
            userId: window.localStorage.getItem("id"),
            title,
            username,
            password
        })
    }

    const updated = await fetch(`${import.meta.env.VITE_BACKEND_URL}/password`, requestOptions);

    if(updated.status == 403) window.location.href = "/";

    const response: Promise<ResponseModel> = await updated.json();

    return response;
}