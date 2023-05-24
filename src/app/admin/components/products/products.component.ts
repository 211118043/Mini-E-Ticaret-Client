import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }


  ngOnInit(): void {

    //#region ÖRNEKLER
    // this.showSpinner(SpinnerType.BallRunningDots);
    // this.httpClientService.get({
    //   controller : "products"

    // }).subscribe(data =>console.log(data));

    // this.httpClientService.get<Product[]>({ // artık gelecek olan verinin türünü yanı karşılayacağımızz verinin türünü belirttik product diye (contratc da  product sınıfı oluşturduk ve propları eşleştirdik ondan sonra unu yaptık)
    //   baseUrl:"https://jsonplaceholder.typicode.com/posts",
    //   controller:"posts"
    // }).subscribe(data=>console.log(data)) //başka bir api kaynağını tüketmeye çalışıyoruz
    //fullEndPoint: "https://jsonplaceholder.typicode.com/posts" de yazabilirdik baseurl ve poduct yerıne


    // this.httpClientService.delete({
    //   controller: "product"

    // },"55041e80-6fb5-4122-8948-0f2c9f8e7fbd").subscribe();

    // this.httpClientService.put({
    //   controller: "products"
      
    // },{
    //   id :"e829c966-8bef-4c30-9690-63761f31655c",
    //   name: "kokulu silgi",
    //   stock: 1500,
    //   price: 5.5
    // }).subscribe();


    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "kalem",
    //   stock:100,
    //   price:15
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "kağıt",
    //   stock:1000,
    //   price:5
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "silgi",
    //   stock:200,
    //   price:10
    // }).subscribe();
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name: "uç",
    //   stock:1000,
    //   price:2
    // }).subscribe();
    

  //#endregion
  }

  @ViewChild(ListComponent) listComponents : ListComponent;
  createdProduct(createdProduct: Create_Product){
    this.listComponents.getProducts(); // bu yaptğımız işlem create product butonuna basıldığı anda listenin güncellenmesi sağlayacak yani listede bir ileri bir geri yapmamıza gerek kalmayacak

  }

}
