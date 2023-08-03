import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { CreateUser } from "./pages/createUser";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/create/user" element={<CreateUser/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}