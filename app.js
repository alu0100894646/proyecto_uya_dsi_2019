function enviarForm() {
    var database = firebase.database();
    var ref = firebase.database().ref('books/');
    console.log(database);
    
    var max_id;
    ref.once('value').then(function (snapshot) {
        max_id = snapshot.numChildren();

        ref.push({
            id: max_id,
            Titulo: "Prueba",

        });
    });
};
