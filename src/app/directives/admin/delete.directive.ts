import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { ProductService } from 'src/app/services/common/models/product.service';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,              //productService: ProductService, kullanmamız doğru olmaz diğerlerinde sıkıntı çıkartır yani sadece product için yapmış gibi olduk o yüzden düzeltiyoruz
    private spinner: NgxSpinnerService,
    private dialog: MatDialog,
    private aletifyService: AlertifyService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor: pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Input() controller;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClick() {
    this.openDialog(async () => {
      this.spinner.show(SpinnerType.BallRunningDots);
      const td: HTMLTableCellElement = this.element.nativeElement;
      //await this.productService.delete(this.id);
      await this.httpClientService.delete({
        controller: this.controller     //controller a gelecek sayfayı bilmiyoruz product olabılır order olabır en çok satanlar sayfası olabilir bilemeyiz bu yüzden opsiyonelleştirdik ve ınput kullandık
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+50",
          heigh: "toogle"
        }, 700, () => {
          this.callback.emit();
          this.aletifyService.message("ürün silme işlemi başarılı ", {
            dismissOthers: true,
            messageType: MessageType.Success,
            position: Position.TopRight
          });
          this.spinner.hide(SpinnerType.BallRunningDots)

        });
      }, (errorResponse: HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.BallRunningDots)
        this.aletifyService.message("ürün silme işlemi başarısız ", {
          dismissOthers: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
        

      });

    });
  }

  openDialog(afterClosed): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === DeleteState.Yes) {
        //alert("ürün silinecek onaylıyor musunuz ?");
        afterClosed();
      }
    });
  }
}