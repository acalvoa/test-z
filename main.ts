/* **************************************************
* Solución O(N2)
* 1. Primero hay que tomar el string y splitearlo para obtener el array
* 2. iteraria donde n es el maximo de interaciones y n es el numero de dias que quiero conocer la cantidad aliens
* 5. si la iteración for es limite es el tamaño antes de incrementar el array no se agregan elementos durante esta iteracióm, el limite de la iteración debe crecer
* 6. cada vez que se agregue un elemento, ese elemento vuelve 6.
* 4. SI el elemento alcanza 0, se debe crear un elemento con estado 8 al final del array
* 3. por cada iteración se debe restar 1 a cada elemento del array
***************************************************** */

/* **************************************************
* Solucion O(N)
* 1. Creamos un array con tantos elementos como estados posibles de los aliens
* 2. Completamos el array iterando los aliens de entrada, y agregando 1 a la posición del array en la que se encuentre el alien iterado.
* 3. Se iteran los dias buscados y los estados posibles - 1, de tal forma que se genere una rotación de los estandos de mayor a menor
* 4. Para este fin debido a que los aliens que llegan a estado 0 quedan reflejados en la siguiente iteración sin ser afectados por la rotación, 
     se debe guardar temporalmente el estado 0 de tal forma que al final de la iteración sean asignados al estado de nacimiento (8) y sumados al 
     estado de reinicio de un alien adulto (6)
* 7. Para finalizar sumamos los numeros de todos los estados para obtener la cantidad de aliens.
***************************************************** */

// La funcion retornara un array con los aliens en esta iteración y los que naceran la siguiente [quantity, toBorn]
export function calcAliens(aliens: string, dias: number): [number, number] {
  const alienList: number[] = aliens.split(',').map(alien => Number(alien));
  // Creamos un array de conteo de estados y le asignamos las cantidades iniciales
  const alienSteps = Array(9).fill(0);
  for (let i = 0; i < alienList.length; i++) {
    alienSteps[alienList[i]]++;
  }
  // Iteramos los dias. Genera una cantidad de iteraciones igual a dias x estados
  for (let dia = 1; dia <= dias; dia++) {
    // Guardamos aquellos aliens que van a reproducirse esta iteración
    const toBorn =  alienSteps[0];
    // Rotamos el array de estados restando 1 posición a todos los estados hasta 0
    for (let i = 0; i < alienSteps.length - 1; i++) {
      alienSteps[i] = alienSteps[i + 1];
      alienSteps[i + 1] = 0;
    }
    // Creamos los nuevos aliens en estado de nacimiento
    alienSteps[8] = toBorn;
    // Reseteamos los aliens devolviendolos a estado 6
    alienSteps[6] += toBorn;
  }
  // Sumamos los estados para obtener el numero de aliens despues de n dias
  return [alienSteps.reduce((a,b) => a+b, 0), alienSteps[0]];
}