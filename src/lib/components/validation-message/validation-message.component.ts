import {Component, Input} from '@angular/core';

/**
 * Defines a component that is able to display an error message.
 * For styling, use the `validation-message` element selector.
 */
@Component({
    selector: 'validation-message',
    templateUrl: './validation-message.html'
})
export class ValidationMessage {

    /**
     * The error message that should be displayed by this component.
     */
    @Input() error: string;

    get isInvalid(): boolean {
        return !!this.error;
    }
}