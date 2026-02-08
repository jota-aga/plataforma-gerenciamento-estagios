import { Routes } from "@angular/router";
import { Profile } from "./profile/profile";
import { authGuard } from "../../core/services/auth.guard";

export const usersRoutes: Routes = [
    {
        path: 'profile',
        component: Profile,
        canActivate: [authGuard]
    }
];