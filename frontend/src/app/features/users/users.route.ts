import { Routes } from '@angular/router';
import { authGuard } from '../../core/services/auth.guard';
import { Candidate } from './candidate/candidate';
import { Company } from './company/company';

export const usersRoutes: Routes = [
  {
    path: 'candidate',
    component: Candidate,
    canActivate: [authGuard],
  },
  {
    path: 'company',
    component: Company,
    canActivate: [authGuard],
  },
];
