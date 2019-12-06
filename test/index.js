'use strict';

const assert = require('assert');
const { Guber } = require('../lib/index');

describe('Test generation of fake payload',() => {
    const payloadSize = 100;
    it('regular payload, no duplicates, no holes', () => {
        const payload = Guber.generateFakePayload(payloadSize);
        assert.equal(payloadSize, payload.length);
    });
	
    it('regular payload, with duplicates, no holes', () => {
        const payload = Guber.generateFakePayload(payloadSize, true);
        assert.equal(true, [...new Set(payload)].length < payload.length);
    });

    it('regular payload, with duplicates, with holes', () => {
        const payload = Guber.generateFakePayload(payloadSize, true, true);
        assert.equal(true, [...new Set(payload)].length < payload.length);
        assert.equal(true, payload.includes(undefined));
    });

    it('regular payload, no duplicate records, with holes (which can be duplicates)', () => {
        const payload = Guber.generateFakePayload(payloadSize, false, true);
        assert.equal(true, payload.includes(undefined));
    });
    

/*
    it('', () => {
        const payload = Guber.generateFakePayload(10, true, true);
        console.log('size: ', payload.length);  //Validating the size
	console.log('duplicates: ', [...new Set(payload)].length < payload.length);  //Checking for duplicates in the array
	console.log('holes: ', payload.includes(undefined));  //Checking for wholes in the array.
    });
    */
});
