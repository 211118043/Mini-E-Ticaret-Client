import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    LayoutComponent,
   
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule, //router-outlet tagını kullanırken sorun çıkmayacak artık
    MatSidenavModule

  ],
  exports:[ //ana componente gıttıgımızde(app-compnent) ona app-layout etiketi verdik ve hata aldık çünkü etiketi bulamadı sıstem, bu etıketın buludungu component, appcomphtml ın buludungu modulun dısında başka bır modulde declare edilmiş, ne kadar app e ımport yapsak dahi etiketin oldugu modulde declare edıldıgı modulde export edilmiş olması gerekiyor,bu yeterli değil admın modulde de layout modulu export etmemız gerekıyor,sona da ana module eklıyoruz
    LayoutComponent
  ]
})
export class LayoutModule { }
