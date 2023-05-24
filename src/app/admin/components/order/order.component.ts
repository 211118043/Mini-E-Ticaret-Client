import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }


  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallRunningDots)

  }


  //constructor() { }
  // constructor(private spinner: NgxSpinnerService) { }

  // ngOnInit(): void {
  //   this.spinner.show("s1");

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide("s1");
  //   }, 5000);
  // }


}
