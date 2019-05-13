function enviarForm(){
      // Initialize Firebase
    const form = document.getElementById('formulario');
       var id = 2;
       var titulo = document.getElementById('titulo');
       var autor = document.getElementById('autor');
       var español = document.getElementById('español');
       var ingles = document.getElementById('ingles');
       var genero = document.getElementById('genero');

       var data = {
         'titulo': "libro random",
         'autor': "agapito",
       };

      var database_ref = firebase.database().ref('books/');
      var newInput = database_ref.push();

      newInput.set({
        id: data
      });
    console.log("enviado");
};
