import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
//declare var alertify : any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // alertify.alert('Ready!'); //admin paneli açıldığında "Ready!" mesajı verecek
    // alertify.success('Success message'); // koşede success mesajı göreceğiz
    

  }

}