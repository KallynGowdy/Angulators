import {ValidatorFn, AbstractControl, FormGroup} from '@angular/forms';

/**
 * Defines a validator that determines whether the control's value equals the given other control's value.
 * @param form A function that is able to retrieve the form group that the other control is in.
 * @param controlName The name of the other control.
 * @param prefix The prefix that should be used for the property name when an object is returned representing the invalid control state. (Defaults to 'equals-')
 * @returns ValidatorFn
 */
export function equals(form: () => FormGroup, controlName: string, prefix: string = 'equals-'): ValidatorFn {
  return (otherControl: AbstractControl): { [key: string]: any } => {
    const f = form();
    if (f) {
      const expected = f.get(controlName);
      const equal = areControlValuesEqual(expected, otherControl);
      const key = prefix + controlName;
      return !equal ? {[key]: otherControl.value} : null;
    }
    return null;
  };
}

/**
 * Determines if the two given controls contain equal values.
 * @param first The first control.
 * @param second The second control.
 * @returns boolean
 */
export function areControlValuesEqual(first: AbstractControl, second: AbstractControl): boolean {
  const expected = first.value;
  const other = second.value;
  const equal = expected === other;
  return equal;
}