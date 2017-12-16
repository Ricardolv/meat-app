import {HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

export class ErrorHandler {

  static handlerError(error: HttpErrorResponse | any) {
     let errorMessages: string

     if (error instanceof HttpErrorResponse) {
        const body = error.error
        errorMessages = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
     } else {
       errorMessages = error.message ? error.message : error.toString()
     }

     console.log(errorMessages)
     return Observable.throw(errorMessages)
  }

}
