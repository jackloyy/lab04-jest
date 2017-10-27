'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

test('should add numbers correctly', function() {
    // javascript
    let result = 1 + 1;

    //assertion
    expect(result).toEqual(2);
})

describe('Basic math', function() {
    //tests
    it('should add numbers correctly', function() {
        // javascript
        let result = 1 + 1;

        // assertion
        expect(result).toEqual(2);
    })
})

describe('invertCase() function', function() {
    it('should invert the case of each uppercase char in the string', function() {
        // assertion
        expect(invertCase('COM')).toEqual('com');
    });

    it('should invert the case of each lowercase char in the string', function() {
        // assertion
        expect(invertCase('com')).toEqual('COM');
    });

    it('should invert the case of each char in the string', function() {
        // assertion
        expect(invertCase('comPUTER')).toEqual('COMputer');
    });
})