import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';


// layout ne işe yarayacak : yönetim panelinin tasarımının alt yapısını oluşturacak
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
   
    //layout olan değil

  ],
  exports:[
    LayoutModule
    
  ]
})
export class AdminModule { }
