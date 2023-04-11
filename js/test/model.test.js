import Calculadora from "../model";

describe("Calculadora integration", () => {
    test("Fa la suma 1+1=2", () => {
        const calc = new Calculadora()
        calc.set("1")
        calc.operator="+"
        calc.set("2")
        const result = calc.operate()
        expect(result).toBe(3)
    });
});

describe("Operació d'un sol valor", () => {
    test("Si nomes hi ha un valor, retornar 1", () => {
        const calc = new Calculadora()
        calc.set("1")
        const result = calc.operate()
        expect(result).toBe("1")
    });
});

describe("Operació, sense operador", () => {
    test("Cap operador, concatena ", () => {
        const calc = new Calculadora()
        calc.set("1")
        calc.set("")
        calc.set("2")
        const result = calc.operate()
        expect(result).toBe("12")
    });
});

describe("Operació, undefined", () => {
    test("Undefined value, retornar: Error", () => {
        const calc = new Calculadora()
        const result = calc.operate()
        expect(result).toBe("Error")
    });
});

describe("Operació, undefined", () => {
    test("Valor decimal", () => {
        let calc = new Calculadora();
        calc.set_point();
        calc.set(2);
        expect(calc.value1).toBe("0.2");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
});

describe("Clean", () => {
    test("Natejar vals", () => {
        let calc = new Calculadora();
        calc.set(2);
        calc.operator = '+';
        calc.set(3);
        calc.clear();
        expect(calc.value1).toBe(undefined);
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
});


describe("addvalue", () => {
    test("Afegir una altre valor 1 a value1", () => {
        let calc = new Calculadora();
        calc.set(1);
        calc.set(1);
        expect(calc.value1).toBe("11");
        expect(calc.operator).toBe(undefined);
        expect(calc.value2).toBe(undefined);
    });
});