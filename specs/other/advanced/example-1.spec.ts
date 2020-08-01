import { TestScheduler } from 'rxjs/testing';
import { expect } from 'chai'
import { takeModNSimple } from '../../../src/other/advanced/example-1'

const testScheduler = new TestScheduler((actual, expected) => {
    // asserting the two objects are equal
    // e.g. using chai.
    expect(actual).deep.equal(expected);
});


it('test takeModNSimple', () => {
    testScheduler.run(helpers => {
        const { cold, expectObservable } = helpers;
        const values = {
            a: 1,
            b: 2,
            c: 3,
        }

        const input =  cold('-a--b--c---|', values);
        const expected = '----b------|';

        const result = input.pipe(
            takeModNSimple(2),
        )

        expectObservable(result).toBe(expected, values);
    });
});
