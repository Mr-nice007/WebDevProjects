// $("h1").html("<em>jQuery</em> is awesome!");
// $("h1").addClass("big-title");
// $("a").attr("href", "https://www.yahoo.com");

// $("button").click(function() {
//     $("h1").css("color", "blue")
// });

$("body").keypress(function(event) {
    $("h1").text(event.key);
});




