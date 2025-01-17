//solución 1
/*const nombre = prompt("Cuál es tu nombre?");
const anios = prompt("Cuántos años tienes?");
const lenguaje = prompt("Qué lenguaje de programación estás estudiando?");

const respuesta = `Muy bien ${nombre} ahora sé que tienes ${anios} y estás estudiando ${lenguaje}, sigue así y serás el mejor, recuerda que la práctica hace al maestro!`;

alert(respuesta);
*/

//solución opcional
const nombre = prompt("Cuál es tu nombre?");
const anios = prompt("Cuántos años tienes?");
const lenguaje = prompt("Qué lenguaje de programación estás estudiando?");

let pregunta;
do {
  pregunta = prompt(
    `te gusta estudiar ${lenguaje} (Responde con el número 1 para SÍ o 2 para NO)?`
  );
  if (pregunta == "1") {
    alert(
      `Muy bien ${nombre} ahora sé que tienes ${anios} y estás estudiando ${lenguaje}, sigue así y serás el mejor, recuerda que la práctica hace al maestro!`
    );
  } else if (pregunta == "2") {
    alert("Lo siento mucho, intenta aprender otros lenguajes");
  } else {
    alert(
      "Bien, parece que no elegiste ningún numero de los anteriores, hemos terminado"
    );
  }
} while (pregunta != "1" && pregunta != "2");
