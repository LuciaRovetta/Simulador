function solicitarPrestamo() {
  let nombre = prompt("Ingrese su nombre");
  let edad = prompt("Ingrese su edad");
  let cantidad = 0;
  if (edad >= 18) {
    cantidad = prompt("Ingrese la cantidad a solicitar");
    while (cantidad < 1000) {
      cantidad = prompt(
        "Ingrese la cantidad a solicitar (el monto no debe ser menor a 1000USD)"
      );
    }
    let cuotas = prompt(
      "Ingrese la cantidad de cuotas en las que desea abonar"
    );
    while (cuotas < 12) {
      cuotas = prompt(
        "Ingrese la cantidad de cuotas en las que desea abonar (Deben ser un mínimo de 12)"
      );
    }
    alert(
      "El préstamo de" +
        " " +
        cantidad +
        "USD " +
        "a pagar en" +
        " " +
        cuotas +
        " meses " +
        "tiene un costo total de 70% de interes"
    );
  } else {
    alert(
      nombre +
        " " +
        "debe ser mayor de edad para poder solicitar un préstamo con nuestra entidad bancaria"
    );
  }
}
