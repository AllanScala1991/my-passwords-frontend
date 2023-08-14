import { ResponseModel } from "../../models/response.model";

export const searchAllPasswordsByUserId = async (userId: string): Promise<ResponseModel> => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
            }
        }
    
        const passwords = await fetch(`${import.meta.env.VITE_BACKEND_URL}/password/user/${userId}`, requestOptions);
        
        if(passwords.status == 403) {
            window.location.href = "/";
        }
        
        const response: Promise<ResponseModel> = await passwords.json();
    
        return response
}