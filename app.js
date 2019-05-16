function enviarForm() {
    //Firebase initialization

    var ref = firebase.database().ref('books/');

    //Fetch data from the form
    var title = document.getElementById('titulo').value;
    var autor = document.getElementById('autor').value;
    var values = $('#genero').val();

    var checkEsp = $('#español:checked').val();
    var checkEng = $('#ingles:checked').val();
    var idiomas = [];

    if (checkEsp != null)
        idiomas.push(checkEsp);

    if (checkEng != null)
        idiomas.push(checkEng);

    if(idiomas.length > 0 && values != null)
    {
      var max_id;
      ref.once('value').then(function (snapshot) {
          max_id = snapshot.numChildren();
          max_id +=1;
          ref.push({
              id: max_id,
              Titulo: title,
              Autor : autor,
              Genero: values,
              Idiomas: idiomas
          });
      });
     }
     else {
       var error = document.getElementById('error_msg');
       error.innerHTML = "<p> Debe introducir al menos 1 genero y 1 idioma </p>";
     }
};
