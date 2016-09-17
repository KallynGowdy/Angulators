import { ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Creates a new validator function that is valid when the given validator is invalid, and vice-versa.
 * @param validator The validator that should be modified.
 * @param name The name of the property that the control value should be set to when returning an object that represents an invalid value.
 */
export function not(validator: ValidatorFn, name: string = 'not'): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const result = validator(control);
        if (result) {
            return null;
        } else {
            return { [name]: control.value };
        }
    }
}