import { calcAliens } from "./main";

test('Calcular 5 aliens iniciales con 1 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 1);
  expect(result).toBe(5);
})

test('Calcular 5 aliens iniciales con 2 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 2);
  expect(result).toBe(6);
})

test('Calcular 5 aliens iniciales con 3 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 3);
  expect(result).toBe(7);
})

test('Calcular 5 aliens iniciales con 4 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 4);
  expect(result).toBe(9);
})

test('Calcular 5 aliens iniciales con 5 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 5);
  expect(result).toBe(10);
})

test('Calcular 5 aliens iniciales con 6 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 5);
  expect(result).toBe(10);
})

test('Calcular 5 aliens iniciales con 7 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 7);
  expect(result).toBe(10);
})

test('Calcular 5 aliens iniciales con 8 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 8);
  expect(result).toBe(10);
})

test('Calcular 5 aliens iniciales con 9 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 9);
  expect(result).toBe(11);
})

test('Calcular 5 aliens iniciales con 10 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 10);
  expect(result).toBe(12);
})

test('Calcular 5 aliens iniciales con 18 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 18);
  expect(result).toBe(26);
})

test('Calcular 5 aliens iniciales con 80 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 80);
  expect(result).toBe(5934);
});

test('Calcular 5 aliens iniciales con 81 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 81);
  expect(result).toBe(6358);
});

test('Calcular 5 aliens iniciales con 82 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 82);
  expect(result).toBe(7087);
});

test('Calcular 5 aliens iniciales con 82 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 82);
  expect(result).toBe(7087);
});

test('Calcular 5 aliens iniciales con 256 dias', () => {
  const [result] = calcAliens('3,4,3,1,2', 256);
  console.log(`Hay ${result} aliens en el dia 256`);
  expect(result).toBe(1732821262171);
});

/** Iterador para ver secuencias de numeros */
/* Se entiende que el resultado de un dia es igual al resultado de la iteración actual + los que naceran */

/* let toBornStored = 0;
let stored = 5;
for (let i=1; i <= 407; i++) {
  test(`Calcular 5 aliens iniciales con ${i} dias`, async () => {
    const [quantity, born] = calcAliens('3,4,3,1,2', i);
    console.log(`Hay ${quantity} aliens en el dia ${i} y naceran ${born} el proximo dia`)
    expect(quantity).toBe(stored + toBornStored);
    stored = quantity;
    toBornStored = born;
  });
}
*/
