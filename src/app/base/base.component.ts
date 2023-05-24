import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {
  constructor(private spinner: NgxSpinnerService) { }

  showSpinner(spinnerNameType: SpinnerType) {
    this.spinner.show(spinnerNameType);

    setTimeout(() => this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType) {
    this.spinner.hide(spinnerNameType);
  }
}

export enum SpinnerType { //showspiiner ın ıcıne name=string yazmicaz bunu daha parametrik hale getirmemiz lazım çünkü daha sonra uygulmaayı açtığımızda nereden ahtırlayacağız s1,s2 falan verdiğimizi bu yüzden enum kullanıyoruz bir şeyi parametrik hale getirmek enumlar üzerinden daha hızlı oluyor
  Timer = "s1",
  BallSpin = "s2",
  BallRunningDots = "s3"
}