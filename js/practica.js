let stock = 100;
let opcion;

function registroProducto(cant) {
  if (stock > cant) {
    stock = stock - cant;
    console.log(`La cantidad de productos son de ${stock} disponibles`);
  } else {
    console.log(`El stock disponible hasta el momento es de ${stock}`);
  }
}

const unidades = () => {
  stock = stock;
  console.log(`Tenemos una cantidad de ${stock} unidades`);
};

function agregado(cant) {
  stock = stock + cant;
  console.log(`La cantidad de stock disponible ahora es de ${stock}`);
}

do {
  opcion = Number(
    prompt(
      "Ingrese una opcion:\n\n1 - Agregar productos al carrito\n2 - Cantidad de stock\n3 - Reponer productos\n4 - Salir"
    )
  );
  let cant;

  switch (opcion) {
    case 1:
      cant = Number(prompt("Ingrese la cantidad de productos"));
      registroProducto(cant);
      break;

    case 2:
      unidades(cant);
      break;

    case 3:
      cant = Number(prompt("Agregar cantidad de unidades que van a reponer"));
      agregado(cant);
      break;

    case 4:
      alert("Hasta luego, que vuelva pronto.");
      break;

    default:
      alert("Opcion incorrecta.");
      break;
  }
} while (opcion !== 4);
