import { Routes } from "@angular/router";
import { CreateJob } from "./create-job/create-job";
import { roleGuard } from "../../core/services/role.guard";
import { authGuard } from "../../core/services/auth.guard";

export const jobsRoutes: Routes = [
    {
        path: 'create',
        component: CreateJob,
        canActivate: [authGuard, roleGuard],
        data: {
            role: 'company'
        }
    }
];