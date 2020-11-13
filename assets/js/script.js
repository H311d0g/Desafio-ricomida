$("#enviarcorreo").click(function(){
    alert("El correo fue enviado exitosamente...");
});

$("h4:first-child").dblclick(function(){
    $(this).css("color" , "red");
});

$(".card-title").click(function() {
    $(".card-text").toggle(function(){
    });
})