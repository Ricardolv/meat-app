import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

export class ErrorHandler {

  static handlerError(error: Response | any) {
     let errorMessages: string

     if(error instanceof Response) {
        errorMessages = `Erro ao acessar a url ${error.url} - ${error.statusText}`
     } else {
       errorMessages = error.toString()
     }

     console.log(errorMessages)
     return Observable.throw(errorMessages)
  }

}
