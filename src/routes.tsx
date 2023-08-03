import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { CreateUser } from "./pages/createUser";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/create/user" element={<CreateUser/>} />
            </Routes>
        </BrowserRouter>
    )
}