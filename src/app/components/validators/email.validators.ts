import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'

export class ValidatorsCustom {
  static emailValid(control: FormControl): {
    [key: string]: boolean
  } {
    if (
      ['asasas', 'asas.sdfrdhth', 'adasdw'].includes(
        control.value
      )
    ) {
      return {invalidEmail: true}
    }
    return {invalidEmail: false}
  }
}
