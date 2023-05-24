import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Position } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor () { //private toastrService: CustomToastrService , test için yazılan mesajlar şimdilik yorum satırı yapıyorum
  // toastrService.message("hi bitch","melcegm",{
  //   messageType:ToastrMessageType.Info,
  //   position:ToastrPosition.TopCenter
  // });
  // toastrService.message("hi bitch","melcegm",{
  //   messageType:ToastrMessageType.Warning,
  //   position:ToastrPosition.TopLeft
  // });
  // toastrService.message("hi bitch","melcegm",{
  //   messageType:ToastrMessageType.Success,
  //   position:ToastrPosition.TopRight  
  // });
  // toastrService.message("hi bitch","melcegm",{
  //   messageType:ToastrMessageType.Error,
  //   position:ToastrPosition.TopRight
  // });
  
  }
}


// $(document).ready(()=>{
//   alert("melçegm biçıs melçegm") //jquery çalışıyor mu onu gördük ve çalıştı sayfa açılmadan mesaj yolladı bize

// })

// $.get("https://localhost:7089/api/products",data =>{
//   console.log(data)
// })

