import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import { MatTableModule } from '@angular/material/table';

declare var $ : any

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertfyService: AlertifyService) {
    super(spinner);
  }

  displayedColumns: string[] = ['name', 'price', 'stock', 'createdDate', 'updatedDate','edit','delete'];
  dataSource: MatTableDataSource<List_Product> = null; // dataSource: MatTableDataSource<any> = null şuan için null olsun diyoruz aslında buraya verilerimiz gelecekti ama bizim verilerimiz şuan için yok API dan gelecek geldiğinde yazacağız
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() { //tabloyu güncelleyen fonksiyon
    await this.showSpinner(SpinnerType.BallRunningDots);
    const allProducts: { totalCount: number; products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => this.hideSpinner(SpinnerType.BallSpin), errorMessage => this.alertfyService.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      }))

    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalCount;

  }

  // delete(id, event){
   
  //   const img : HTMLImageElement = event.srcElement; 
  //   $(img.parentElement.parentElement).fadeOut(500); //listedeki verile 1,5 saniyede siliyoruz

  // }
  
  async pageChanged(){
    await this.getProducts();

}

  
  async ngOnInit() {
  await this.getProducts();


}
   

}
