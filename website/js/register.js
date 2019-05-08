// JavaScript source code
function register() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email + "    " + password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Loged in");
        } else {
            console.log("Fail");
        }
    });

}