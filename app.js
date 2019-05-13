function enviarForm() {
    var database = firebase.database();
    var id = 1;
    console.log(database);
     id+={
        "id": "1",
        "description" : {
            "titulo": "Un libro random",
            "autor" : "Agapito"
        }
    }
    firebase.database().ref().set({
        insert_book
    });
};