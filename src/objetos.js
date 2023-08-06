"use strict";
//Objetos
//Type Alias
Object.defineProperty(exports, "__esModule", { value: true });
exports.thor = void 0;
function createHero(input) {
    const { name, age } = input;
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    };
}
exports.thor = createHero({ name: 'Thor', age: 2500 });
