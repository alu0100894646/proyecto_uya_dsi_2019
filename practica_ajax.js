<<<<<<< HEAD

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
=======
$(document).ready(function () {
    $("#mybutton").click(function () {
        console.log("debug");
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/comments?postId=1",
            headers: { 'Access-Control-Allow-Origin': '*' },
            crossDomain: true,
            success: function (data) {
                alert("success");
                console.log("success");
                var data_json = JSON.stringify(data)//,null,2);
                $("#test_button").html(data_json);
            },
            error: function (status) {
                alert("Exception generated: " + status);
            },
        });
    });
});
>>>>>>> cfd27a786f2730fd831a2dcb5db1decb7feac19a
