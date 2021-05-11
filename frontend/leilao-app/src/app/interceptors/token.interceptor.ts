import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const reqUrl: Array<any> =  req.url.split('/')
        const apiUrl: Array<any> = environment.apiUrl.split('/')
        const token = localStorage.getItem('token')

        if(token && (reqUrl[2] === apiUrl[2])) {
           const newReq =  req.clone({ setHeaders: {'Authorization': `Barer ${token}`} })
           return next.handle(newReq)
        } else{
            return next.handle(req)
        }
        
    }
}