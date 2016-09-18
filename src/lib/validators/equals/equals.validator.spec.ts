/// <reference path="../../../typings/index.d.ts" />
import { areControlValuesEqual } from './equals.validator';

describe('equals', function () {
    describe('.areControlValuesEqual()', function () {
        beforeEach(function() {
            this.first = {
                value: ''
            };
            this.second = {
                value: ''
            };
        });
        it('should return false for control values are not the same', function() {
            this.first.value = 'Test';
            this.second.value = 'Other';
            const valid = areControlValuesEqual(this.first, this.second);
            expect(valid).toBe(false);
        });
        it('should return true for control values are the same', function() {
            this.first.value = 'Test';
            this.second.value = 'Test';
            const valid = areControlValuesEqual(this.first, this.second);
            expect(valid).toBe(true);
        });
        it('should return false for control values that would be equal with non strict', function() {
            this.first.value = '1';
            this.second.value = 1;
            const valid = areControlValuesEqual(this.first, this.second);
            expect(valid).toBe(false);
        });
    });
});
