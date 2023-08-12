
export const deletePasswordById = async (id: string) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        }
    }

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/password/${id}`, requestOptions);
}