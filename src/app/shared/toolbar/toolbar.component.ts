import { Component, EventEmitter, OnInit, Output } from "@angular/core";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  isAdmin = false;
  @Output() toolbarAdmin = new EventEmitter<void>();

  constructor(){}

  ngOnInit(): void {}

  onToolbarAdmin():void{
    this.toolbarAdmin.emit();
  }
  

}
