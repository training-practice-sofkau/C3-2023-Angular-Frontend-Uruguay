import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SinginComponent {
  show: boolean = true;

  signinForm = this.formBuilder.group({
    email: new FormControl(""),
    password: new FormControl(""),
    remember: new FormControl("")
  });

  constructor(private formBuilder: FormBuilder, private cookie: CookieService, private router: Router) {}

  redirect(url: string) {
    this.router.navigate(["/" + url]);
  }

  switchPassword(){
    this.show = !this.show;
  }
}
