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