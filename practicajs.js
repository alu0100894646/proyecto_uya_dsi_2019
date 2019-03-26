function conversor_divisas() {
  var selected_divisa = document.getElementById("selected-divisa").value;
  var to_divisa = document.getElementById("todivisa").value;
  console.log(selected_divisa,to_divisa);

  var conversor = {
    euros_to_libra : 1.2,
    euros_to_kunas : 3.6,
    libra_to_kunas : 5.7,
  }

  var divisa = document.getElementById("inputdivisa").value;
  var multiplier = 1;
  //console.log(conversor.euros_to_kunas);
  console.log(divisa);

  if (selected_divisa == to_divisa)
      multiplier = 1;
  else {
      if (selected_divisa == "Euro") {
          if (to_divisa == "Libra")
              multiplier = conversor.euros_to_libra;
          if (to_divisa == "Kuna")
              multiplier = conversor.euros_to_kunas;
      }

      if (selected_divisa == "Libra") {
          if (to_divisa == "Euro")
              multiplier = (1 / conversor.euros_to_libra);
          if (to_divisa == "Kuna")
            multiplier = conversor.libra_to_kunas;
      }

      if (selected_divisa == "Kuna") {
          if (to_divisa == "Euro")
              multiplier = 1 / conversor.euros_to_kunas;
          if (to_divisa == "Libra")
              multiplier == 1 / conversor.libra_to_kunas;
      }
  }
  console.log(multiplier);
  document.getElementById("result_divisa").innerHTML = "</br><p> El resultado de la conversion es :" + (divisa * multiplier) + "</p>";

}

function importe_factura() {
    var factura = {
        "id_factura": "1",
        "articulos": [
            {
                "nombre": "Huevos",
                "precio":"1.5"
            },
            {
                "nombre": "Leche",
                "precio":"2"
            },
            {
                "nombre": "Azucar",
                "precio":"1"
            }
        ]
    }
    var total_factura = 0;
    console.log(factura.articulos);

    for (var i in factura.articulos) {
        document.getElementById("ej_2").innerHTML += "</br><p>Articulo " + i + " " + factura.articulos[i].nombre + " precio: " + factura.articulos[i].precio+"</p>"
        total_factura += (factura.articulos[i].precio * 1.07);
    }
    console.log(total_factura);
    document.getElementById("ej_2").innerHTML += "</br><p> El precio total de la factura " + factura.id_factura + " es de: " + total_factura + " euro(s)</p>";


}

function count_elements() {
    var num_p = document.getElementsByTagName("p");
    console.log("Número de elementos p " + num_p.length);
    var num_a = document.getElementsByTagName("a");
    console.log("Número de elementos a " + num_a.length);
    var num_ul = document.getElementsByTagName("ul");
    console.log("Número de elementos ul " + num_ul.length);
}