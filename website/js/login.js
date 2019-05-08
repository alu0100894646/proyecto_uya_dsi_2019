// JavaScript source code
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            window.location.href = "succes_login.html";
        } else {
            console.log("error");
        }
    });
}