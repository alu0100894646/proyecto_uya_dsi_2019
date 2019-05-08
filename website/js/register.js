// JavaScript source code
function register() {

    var email = document.getElementById("email").value;
    var conf_email = document.getElementById("conf_email").value;
    var password = document.getElementById("password").value;
    var conf_password = document.getElementById("conf_password").value;
    console.log(email + "    " + password);

    if (email == conf_email && password == conf_password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    else {
        var error_message = document.getElementById("error_message");
        error_message.innerHTML = "<p> El Email o la contraseña introducidos no coinciden </p>"; 
    }

    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            window.location.href = "succes_login.html";
        } else {
            console.log("error");
        }
    });
}