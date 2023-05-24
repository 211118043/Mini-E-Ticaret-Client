import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent }, //Yani anasayfa olacak nitelikteki componentlerde direkt componenti çağırıyoruz,lazyloading i uygulamıyoruz
      {
        path: "customers", loadChildren: () => import("./admin/components/customers/customers.module").
          then(module => module.CustomersModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/components/order/order.module").
          then(module => module.OrderModule)
      },
      {
        path: "products", loadChildren: () => import("./admin/components/products/products.module").
          then(module => module.ProductsModule)
      }
    ]
  },
  { path: "", component: HomeComponent }, //bir siteyi açtığımızda direkt karşımıza gelen sayfa , bu da anasayfa olduğu için loadchilren yok
  {
    path: "basket", loadChildren: () => import("./ui/components/basket/basket.module").
      then(module => module.BasketModule)
  },
  {
    path: "products", loadChildren: () => import("./ui/components/products/products.module").
      then(module => module.ProductsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
