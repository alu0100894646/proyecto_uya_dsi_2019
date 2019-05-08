
/*$(document).ready(function() {
    $("#mybutton").click(function () {
        console.log("hola");
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments?postId=1",
            data: $("#test_button").load(),
            success: function () {
                console.log("funciona");
            },
            error: function (jqxhr, status, exception) {
                console.log("Exception:" + status);
            },
            complete: function (xhr, status) {
                console.log("Petición realizada con exito.");
            }

        });
    //$("#test_button").text("Hola Mundo!");
    //aconsole.log("mibotn");
  });
});*/

$(document).ready(function () {
    $("#mybutton").click(function () {
        console.log("hola");
    });

});
