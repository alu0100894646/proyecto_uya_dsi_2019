function register (){
  var name = document.getElementById('nombre').value;
  var surname = document.getElementById('apellidos').value;
  var email = document.getElementById('email').value;
  var confemail = document.getElementById('confemail').value;
  var password = document.getElementById('contraseña').value;
  var confpassword = document.getElementById('confcontraseña').value;
  console.log(email);
  if(email===confemail)
  {
    if(password===confpassword){
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }
    else{
      alert("Error en la contraseña");
    }
  }
  else{
    alert("Error en el email");
  }
}

function login(){
  var email = document.getElementById('email_login').value;
  var password = document.getElementById('password_login').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Loged in");
    } else {
      console.log("Fail");
    }
  });
}
