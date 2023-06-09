import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spiner: NgxSpinnerService, private productServices: ProductService, private alertfy: AlertifyService) {
    super(spiner)


  }
  ngOnInit(): void {

  }

  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Resimleri seçin veya sürükleyin",
    isAdminPage: true,
    accept: ".png , .jpg, jpeg" //sadece bu formatta dosya yüklenebilir 


  }




  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallSpin)
    const create_product: Create_Product = new Create_Product
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    this.productServices.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallSpin),

        this.alertfy.message("ürün ekleme başarılı", {
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight
        });
      this.createdProduct.emit(create_product);
    }, errorMessage => {
      this.alertfy.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopCenter

      })

    }) // işlem başarılı olduğunda duracak 

  }

}
