import { avg, sum3 } from '../src';

describe('avg should calculate an average properly', () => {
    test('three positive numbers', () => {
        expect(avg(3, 4, 5)).toBe(4);
    });
    test('three negative numbers', () => {
        expect(avg(3, -4, -5)).toBe(-2);
    });
});

describe('sum3 should calculate a sum properly', () => {
    test('three positive numbers', () => {
        expect(sum3(3, 4, 5)).toBe(12);
    });
    test('three negative numbers', () => {
        expect(sum3(3, -4, -5)).toBe(-6);
    });
});

// function expect(arg0: number) {
//     throw new Error('Function not implemented.');
// }
