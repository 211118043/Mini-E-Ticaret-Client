import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }
  private url(requestParameter: Partial<RequestParameters>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
    //kodun açıklaması = requestP iinde baseUrl doluysa kullanabilirsin onu ama dolu değilse yukarıda ana modülden gelen ortak noktadan gelen base url i kullan
    //request parameter dan geliyorsa özel olarak başka bir url e istek yapıyoruzdur eğer öyle bi parametre vermediysek uygulamanın ana baseUrl ne istek yapılacak


  }

  get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T> { //controller: string, action?: string, id?: string ,artık nesne kullanacağız bunları içeriye yazmamıza gerek yok 
    //id body gibi değerler ilgili fonksiyondan alınır
    let url: string = ""; // url oluşturmaya başladık
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${id ? `/${id}}` : ""}${requestParameter.queryString? `?${requestParameter.queryString}` : ""}` ;   //`${this.baseUrl}/${controller}/${action}` artık bunu kullanmıyoruz
    //burada id varsa /id dön yoksa "" dön dedik yani if gibi bir şey yaptık

    return this.httpClient.get<T>(url, { headers: requestParameter.headers });
  }

  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString? `?${requestParameter.queryString}` : ""}`
    return this.httpClient.post<T>(url, body, { headers: requestParameter.headers });


  }

  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>):Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString? `?${requestParameter.queryString}` : ""}`
    return this.httpClient.put<T>(url, body, { headers: requestParameter.headers });

  }

  delete<T>(requestParameter: Partial<RequestParameters>, id: string) :Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint
    else
      url = `${this.url(requestParameter)}/${id}${requestParameter.queryString? `?${requestParameter.queryString}` : ""}`
      return this.httpClient.delete<T>(url, {headers: requestParameter.headers})
    

  }

}




//parametrik çalışmalarda nesne kullanmakta fayda var 
export class RequestParameters {
  controller?: string;
  action?: string;
  queryString : string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string; // dış dünyadan farklı servislere istek göndermek istiyorsak bunu kullanacağız


}
