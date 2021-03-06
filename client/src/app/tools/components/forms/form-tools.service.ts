import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IFormSchema, IValidator } from 'app/tools/schema.model';
import { validateDate } from 'app/tools/validators/date.validator';
import { validateInteger } from 'app/tools/validators/integer.validator';
import { validateOptionalDate } from 'app/tools/validators/optional-date.validator';
import { validateTime } from 'app/tools/validators/time.validator';

@Injectable()
export class FormToolsService {

  constructor() { }

  hasErrorsToShow(form: FormGroup, field: string) {
    const control = this.getControl(form, field);
    return control && control.invalid && this.shouldBeValid(control);
  }

  getErrors(form: FormGroup, field: string, schema: IFormSchema) {
    const control = this.getControl(form, field);
    if (control && control.errors) {
      return this.getMessage(control.errors, field, schema);
    } else {
      return '';
    }
  }

  getMessage(errors: { [key: string]: any }, field: string, schema: IFormSchema) {
    Object.keys(errors).forEach(errorKey => {
      const control = schema.controls.find(c => c.key === field);
      if (control) {
        const validator = control.validators.find(v => v.key === errorKey);
        if (validator) {
          return validator.errorMessage;
        }
      } else {
        return errorKey;
      }
    });
  }

  getControl(form: FormGroup, field: string) {
    return form && form.get(field);
  }

  shouldBeValid(control) {
    return (control.touched || control.dirty);
  }

  // tslint:disable-next-line:cyclomatic-complexity
  getValidator(validation: IValidator) {
    switch (validation.key) {
      case 'required':
        return Validators.required;
      case 'requiredTrue':
        return Validators.requiredTrue;
      case 'email':
        return Validators.email;
      case 'validDate':
        return validateDate;
      case 'validOptionalDate':
        return validateOptionalDate;
      case 'time':
        return validateTime;
      case 'integer':
        return validateInteger;
      default:
        break;
    }

  }

}
