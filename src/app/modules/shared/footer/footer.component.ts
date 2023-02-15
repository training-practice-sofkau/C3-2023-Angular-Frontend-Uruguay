import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  status: boolean = true;

  constructor( protected loginService: LoginService,
              private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.loginService.currentStatusEmitter.subscribe({
      next: (data) => { this.status = data },
      complete: () => { console.log(this.status) }
    })
  }

}
