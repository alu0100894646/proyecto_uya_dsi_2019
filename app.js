
      // Initialize Firebase
      var firebaseConfig = {
    apiKey: "AIzaSyAFlF9buXw6HuxZGfw9ANjnaQkSP9_dBKI",
    authDomain: "formulary-f1e07.firebaseapp.com",
    databaseURL: "https://formulary-f1e07.firebaseio.com",
    projectId: "formulary-f1e07",
    storageBucket: "formulary-f1e07.appspot.com",
    messagingSenderId: "405576541388",
    appId: "1:405576541388:web:44f4753dbf6c680d"
  };
     firebase.initializeApp(firebaseConfig);

      const form = document.getElementById('formulario')
      form.addEventListener('submit', enviarForm);

      function enviarForm(event){
          event.preventDefault();

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
      };

function saveContactForm(data) {
    firebase.database().ref('formulary-f1e07').set(data).then(function() {
alert('dato almacenado correctamente');})
 .catch(function(error){
 console.log('detectado un error', error);
 });
};

 