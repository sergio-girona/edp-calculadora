import {calculate} from "../utils";

describe("suma", () => {
    test("Fa la suma 1+2=3", () => {
        expect(calculate(1,2, '+')).toBe(3);
    });


    test("Fa la resta 5-2=3", () => {
        expect(calculate(5,2, '-')).toBe(3);
    });

    test("Fa la multi 7*7=49", () => {
        expect(calculate(7,7, '*')).toBe(49);
    });

    test("Fa la div 81/3=27", () => {
        expect(calculate(1,2, '+')).toBe(3);
    });
});