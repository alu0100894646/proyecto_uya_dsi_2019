function enviarForm(){
      // Initialize Firebase
      const form = document.getElementById('formulario')


      function enviarForm(event){
          event.preventDefault();
        };
       var id = 4;
       var titulo = document.getElementById('titulo');
       var autor = document.getElementById('autor');
       var español = document.getElementById('español');
       var ingles = document.getElementById('ingles');
       var genero = document.getElementById('genero');

       var data = {
         'titulo': titulo.value,
         'autor': autor.value,
         'español': español.value,
         'ingles': ingles.value,
         'genero': genero.value
       };

      var database_ref = firebase.database().ref();
      var newInput = database_ref.push();


      newInput.set({
        autor: autor,
        genero:genero,
        titulo: titulo
      });





      /*function saveContactForm(data) {
          firebase.database().ref('formulary-f1e07').push(data).then(function() {
      alert('dato almacenado correctamente');})
       .catch(function(error){
       console.log('detectado un error', error);
       });
     };*/

};
