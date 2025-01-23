function inputName() {
  let name = document.getElementById("nameInput").value;
  let bienvenida = `Hola bienvenido ${name} juguemos un rato!`;
  alert(bienvenida);
  document.getElementById("descripcion").innerText = "Historial:";
  document.getElementById("nombre").innerText = `Nombre: ${name}`;

  let ruta;
  while (ruta != "Front-End" && ruta != "Back-End") {
    ruta = prompt(
      "Qué área de la tecnología quieres seguir? (Front-End o Back-End"
    );
    document.getElementById("ruta").innerText = `ruta: ${ruta}`;
  }
  let lenguaje;
  if (ruta == "Front-End") {
    while (lenguaje !== "React" && lenguaje !== "Vue") {
      lenguaje = prompt("Qué te gustaría aprender React o Vue?");
    }
    if (lenguaje == "React") {
      alert(
        "Genial, React es una tecnología espectacular desarrollada por Faceboook!"
      );
    } else if (lenguaje == "Vue") {
      alert(
        "Genial, Vue es una tecnología espectacular, desarrollada y muy utilizada!"
      );
    }
  } else if (ruta == "Back-End") {
    while (lenguaje !== "C#" && lenguaje !== "Java") {
      lenguaje = prompt("Qué te gustaría aprender Java o C#?");
    }
    if (lenguaje == "Java") {
      alert("Genial Java es un lenguaje con POO, excelente decisión!");
    } else if (lenguaje == "C#") {
      alert("C# es robustooooo eh, excelente viaje");
    }
  }
  document.getElementById("lenguaje").innerText = `Lenguaje: ${lenguaje}`;

  let aprenderMas;
  while (aprenderMas !== "Si" && aprenderMas !== "No") {
    aprenderMas = prompt(
      "Quieres compartirme tecnologías que quieres aprender?(Si/No)"
    );
  }

  let informacionExtra;
  let seguir;

  if (aprenderMas == "Si") {
    do {
      informacionExtra = prompt(
        "Ingresa tus metas, planes, lenguajes de programación... todo lo que nos quieras compartir"
      );
      document.getElementById(
        "informacionextra"
      ).innerText += `\n ${informacionExtra}`;
      seguir = prompt(
        "Quiere seguir? (Presione Si para seguir o cualquiera letra para salir)"
      );
    } while (seguir == "Si");
    document.getElementById("mensaje").innerText = "Gracias por jugar:D";
  } else {
    alert("Muchas gracias por jugar a aprender");
    document.getElementById("mensaje").innerText = "Gracias por jugar:D";
  }
}
