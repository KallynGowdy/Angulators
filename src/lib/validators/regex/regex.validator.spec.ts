/// <reference path="../../../typings/index.d.ts" />
import { regex } from './regex.validator';

describe('equals', function () {
    describe('.regex()', function () {
        it('should return a function', function() {
            const validator = regex(/abc/);
            expect(typeof validator).toBe('function');
        });
        it('should return a function that returns an object when control is invalid', function() {
            const validator = regex(/^abc$/);
            const control: any = {value: 'not valid'};
            const result: any = validator(control);
            expect(result).not.toBeNull();
            expect(result.regex).toBe('not valid');
        });
        it('should return a function that returns null when control is valid', function() {
            const validator = regex(/^abc$/);
            const control: any = {value: 'abc'};
            const result: any = validator(control);
            expect(result).toBeNull();
        });
    });
});