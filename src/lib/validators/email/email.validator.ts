import { ValidatorFn, AbstractControl } from '@angular/forms';

/**
 * Creates a validator that is able to validate emails.
 * @param name The name of the property that the invalid email should be set to in the returned object.
 */
export function email(name = 'email'): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const email = control.value;
        const valid = isValidEmail(email);
        return !valid ? { [name]: email } : null;
    };
}

/**
 * Determines whether the given email is valid.
 */
export function isValidEmail(email: string): boolean {
    const at = email.indexOf('@');
    const lastDot = email.lastIndexOf('.');
    const valid = at > 0 && lastDot > at + 1 && lastDot < email.length - 1;
    return valid;
}
