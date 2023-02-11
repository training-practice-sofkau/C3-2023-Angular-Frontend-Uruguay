import { Component } from '@angular/core';

@Component({

  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent {

  isMainDesktop: boolean = true;
  isInPublicZone:boolean = false;

  constructor(){}


  toMainDesktop(){
    this.isMainDesktop = true;
  }

 }
