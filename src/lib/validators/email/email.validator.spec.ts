/// <reference path="../../../typings/index.d.ts" />
import { isValidEmail } from './email.validator';

describe('email', function() {
    describe('.isValidEmail()', function() {
        it('should return false if email doesn\'t contain @ symbol', () => {
            const valid = isValidEmail('myemail_gmail.com');
            expect(valid).toBe(false);
        });
        it('should return false if email doesn\'t contain period', () => {
            const valid = isValidEmail('myemail@gmailcom');
            expect(valid).toBe(false);
        });
        it('should return false if email doesn\'t contain domain before period', () => {
            const valid = isValidEmail('myemail@.com');
            expect(valid).toBe(false);
        });
        it('should return false if email doesn\'t contain domain after period', () => {
            const valid = isValidEmail('myemail@gmail.');
            expect(valid).toBe(false);
        });
        it('should return false if period is before @ symbol', () => {
            const valid = isValidEmail('my.email@gmailcom');
            expect(valid).toBe(false);
        });
        it('should return true if email is valid', () => {
            const valid = isValidEmail('myemail@gmail.com');
            expect(valid).toBe(true);
        });
        it('should return true if email contains period before @ symbol with period after', () => {
            const valid = isValidEmail('my.email@gmail.com');
            expect(valid).toBe(true);
        });
    });
});