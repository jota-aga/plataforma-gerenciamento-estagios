import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.route';
import { usersRoutes } from './features/users/users.route';
import { MainLayout } from './shared/layout/main-layout/main-layout';
import { jobsRoutes } from './features/jobs/jobs.routes';

export const routes: Routes = [
    {
        path: 'auth',
        children: authRoutes
    },
    {
        path: 'users',
        component: MainLayout,
        children: usersRoutes
    },
    {
        path: 'jobs',
        component: MainLayout,
        children: jobsRoutes
    }
];
