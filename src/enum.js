"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // Valor: 2
})(Color || (Color = {}));
let selectedColor = Color.Red;
console.log(selectedColor); // Salida: 0 (valor numérico correspondiente a Color.Red)
let today = 3 /* Day.Wednesday */;
console.log(today); // Salida: 3 (valor numérico correspondiente a Day.Wednesday)
