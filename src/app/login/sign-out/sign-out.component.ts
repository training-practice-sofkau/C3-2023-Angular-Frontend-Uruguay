import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent {

  constructor(private service: ServiceService,
    private router: Router) {}

    signOut() {
      this.service.signOut();
      setTimeout(() => this.router.navigate(['/login']), 200)
    }
}
