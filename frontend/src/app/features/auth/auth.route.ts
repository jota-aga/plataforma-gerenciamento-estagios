import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { Unauthorized } from "./unauthorized/unauthorized";

export const authRoutes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'unauthorized',
        component: Unauthorized
    }
];