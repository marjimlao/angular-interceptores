import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SolicitudInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Modificamos la URL de la petición para solicitar únicamente 10 elementos.

        request = request.clone({
            url: request.url + '?_limit=10'
        });

        return next.handle(request);
    }
}
