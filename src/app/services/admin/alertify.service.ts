import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
 
 
  constructor() { }
  //message(message: string, messageType: MessageType, position: Position, delay: number = 3, dismissOthers: boolean = false)
  message(message: string, options : Partial<AlertifyOptions>) { //partial i {} şunu parametre olarak kullaabilmek için ekledik
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    alertify[options.messageType](message) //kullanıcı neyi seçerse ona göre mesaj döndürecek, swichcase ıf le falan uğraşmıyoruz
    const msj = alertify[options.messageType](message)
    if (options.dismissOthers)
      msj.dismissOthers

  }
  dismissAll() {
    alertify.dismissAll() //bende çalışmıyor mesajları silmiyor // güncelleme düzlettim dissmiss yazmışım ondan çalışmıyormuş

  }
  
}
export class AlertifyOptions{ // burda hata aldık typescipt sıkıntı çıkarıyor onu da tsconfig.json da script kısmını false yaptık
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;


}



export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}