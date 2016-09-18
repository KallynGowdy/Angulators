import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Defines a base class for components that need to track errors with forms. 
 */
export class ValidationComponent {

    /**
     * Tracks changes on the given form group and applies errors to the given errors object 
     * using the messages defined in the given messages object.
     * @param group The form group that should be registered.
     * @param errorsObj The object that the errors should be stored in.
     * @param messagesObj The object that the error messages exist in. 
     */
    public registerForm(group: FormGroup, errorsObj: any, messagesObj: any): void {
        group.valueChanges
            .subscribe(data => this._onValueChanged(group, errorsObj, messagesObj, data));
        this._onValueChanged(group, errorsObj, messagesObj);
    }

    private _onValueChanged(form: FormGroup, errors: any, messages: any, data?: any) {
        for (const field in errors) {
            // clear previous error message (if any)
            errors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const fieldMessages = messages[field];
                for (const key in control.errors) {
                    errors[field] += fieldMessages[key] + ' ';
                }
            }
        }
    }
}