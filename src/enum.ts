enum Color {
  Red,    // Valor: 0
  Green,  // Valor: 1
  Blue    // Valor: 2
}

let selectedColor: Color = Color.Red;
console.log(selectedColor); // Salida: 0 (valor numérico correspondiente a Color.Red)

const enum Day {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
}

let today: Day = Day.Wednesday;
console.log(today); // Salida: 3 (valor numérico correspondiente a Day.Wednesday)
