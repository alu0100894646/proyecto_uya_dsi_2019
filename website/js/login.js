// JavaScript source code
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
        edge: 'right'
    }
    var instances = M.Sidenav.init(elems,options);
});


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
            var error_message = document.getElementById("error_message");
            error_message.innerHTML= "<p aria-live=\"assertive\"> Correo electrocino o contraseña erroneos </p>"
            console.log("error");
        }
    });
}
