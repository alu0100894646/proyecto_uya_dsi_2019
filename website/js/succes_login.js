// JavaScript source code
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

    ref.once('value').then(function (snapshot) {

        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var data = childSnapshot.val();
            tbody.innerHTML += "<tr><td>" + data.Titulo + "</td><td>" + data.Autor + "</td></tr>";
            console.log(data.Titulo);
        });
    });
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}