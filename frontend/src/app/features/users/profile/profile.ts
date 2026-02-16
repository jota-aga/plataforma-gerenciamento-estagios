import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  role: "candidate" | "company";

  constructor(private authService: AuthService) {
    this.role = this.authService.getRole()!;
  }
}
