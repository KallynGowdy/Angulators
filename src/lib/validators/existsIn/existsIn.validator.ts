import { ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Creates a validator that validates whether the control's value exists in the given array
 * of values.
 * @param arr The array of values that the control needs to exist in.
 * @param name The name of the property that the invalid value should be set to in the returned object.
 */
export function existsIn(arr: any[], name: string = 'existsIn'): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const value = control.value;
        const index = arr.indexOf(value);
        const contains = index >= 0;
        return contains ? null : {[name]: value};
    };
}