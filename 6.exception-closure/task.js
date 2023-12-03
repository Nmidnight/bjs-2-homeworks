function parseCount(parser) {
    let resultParser = Number.parseFloat(parser);
    if (Number.isNaN(resultParser)) {
        throw new Error('Невалидное значение');
    }
    return resultParser;
}
function validateCount(parser) {
    try {
        return parseCount(parser);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((b + c) < a) || ((c + a) < b)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
		let p = this.perimeter / 2;
		return Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) + Number.EPSILON) / 1000;

	}
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}