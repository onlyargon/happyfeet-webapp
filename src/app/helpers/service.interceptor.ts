import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class ServiceInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorization',
                'Bearer ' + localStorage.getItem('token')
            )
        });

        console.log('*********** TOKEN **************');
        console.log(localStorage.getItem('token'));
        console.log('*********** TOKEN **************');

        return next.handle(newRequest);
    }
}
