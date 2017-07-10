import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio-option.model';

/**
    E meio estranho esta configuracao passando no providers:
      " forwardRef, NG_VALUE_ACCESSOR, ControlValueAccessor "
    mas e forma de configurar o componente como um value acessor,
    que fique disponivel para as diretivas ngModel e outras diretivas
    do modulo reactive forms.
*/

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      //Declarando uma referencia no componente
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

  /**
  * Metodo responsavel por ser chamado pelas diretivas,
  * quando elas querem passar um valor para o seu componentes.
  */
  writeValue(obj: any) : void {
    this.value = obj
  }

  /**
  * Metodo responsavel por receber uma funcao sempre que o valor interno mudar.
  */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /**
  * Metodo responsavel por registrar que o usuario entrou no componente.
  */
  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {}
}
