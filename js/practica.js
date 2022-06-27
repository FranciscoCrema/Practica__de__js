let poner = prompt("Si para que funcione, No para terminar");

while (poner == "si") {
  let numero = prompt("Ingrese un numero");
  for (let i = 1; i <= 15; i++) {
    let tabla = numero + i;
    console.log(`${numero} + ${i} = ${tabla}`);
  }

  for (let i = 1; i <= 10; i++) {
    let tabla = numero - i;
    console.log(`${numero} - ${i} = ${tabla}`);
  }

  let validar = prompt("Si para seguir, No para terminar");
  if (validar == "si") {
  } else {
    break;
  }
}
