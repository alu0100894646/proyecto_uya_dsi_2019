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
  document.getElementById("result_divisa").innerHTML = "</br><p> El resultado de la conversion es :" + (divisa * multiplier) + "<p>";

}
