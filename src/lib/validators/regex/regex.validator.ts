import { ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Creates a validator that tests the control against the given regex.
 * If the control doesn't pass the regex, then it is invalid. Otherwise, it is valid.
 * @param regex The regular expression that the control value should match.
 * @param name The name of the property that the returned object should contain. (Defaults to 'regex')
 * @returns ValidatorFn
 */
export function regex(regex: RegExp, name = 'regex'): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const value = control.value;
        const matches = regex.test(value);
        return matches ? null : { [name]: value };
    };
}
