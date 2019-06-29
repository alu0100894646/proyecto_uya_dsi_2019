// JavaScript source code
function enviarForm() {
    //Firebase initialization

    var ref = firebase.database().ref('books/');

    //Fetch data from the form
    var title = document.getElementById('titulo').value;
    var autor = document.getElementById('autor').value;
    var values = $('#genero').val();

    var checkEsp = $('#esp:checked').val();
    var checkEng = $('#ingles:checked').val();
    var idiomas = [];

    if (checkEsp != null)
        idiomas.push(checkEsp);

    if (checkEng != null)
        idiomas.push(checkEng);

    if (idiomas.length > 0 && values != null) {
        var max_id;
        ref.once('value').then(function (snapshot) {
            max_id = snapshot.numChildren();
            max_id += 1;
            ref.push({
                id: max_id,
                Titulo: title,
                Autor: autor,
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

function carousel_data() {
    var ref = firebase.database().ref('books/');
    var tbody = document.getElementById('tablebody');
    tbody.innerHTML = "";
    ref.once('value').then(function (snapshot) {

        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var data = childSnapshot.val();
            var idiomas = data.Idiomas;
            var idiomas_fixed;

            if (idiomas.length == 1)
                idiomas_fixed = idiomas[0];
            if (idiomas.length == 2)
                idiomas_fixed = idiomas[0] + " y " + idiomas[1];

            var generos = data.Genero;
            var generos_fixed = "";
            console.log(generos);

            var i;

            for (i = 0; i < generos.length; i++)
                generos_fixed += generos[i] + " ";


            tbody.innerHTML += "<tr><td tabindex=\"0\">" + data.Titulo + "</td><td tabindex=\"0\">" + data.Autor + "</td><td tabindex=\"0\">" + idiomas_fixed + "</td><td tabindex=\"0\">" + generos_fixed + "</td></tr>";
            //console.log(data);
        });
    });
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function log_off() {

    firebase.auth().signOut().then(function () {
        window.location.href = "index.html";
    }).catch(function (error) {
        // An error happened.
    });
}