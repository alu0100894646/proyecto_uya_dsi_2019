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
  console.log(conversor.euros_to_kunas);
  console.log(divisa);

}
