$(document).ready(function() {
    $("#ingresar").click(function(event) {
        window.location = "http://localhost:8888/sp-frontend/sucursales.html"
    });
    var $dateYear = $("<p/>").html("&copy; | " + new Date().getFullYear() + " Copyright");
    $("#contactenos .nav-footer").append($dateYear);

    $(".entrar").click(function(event) {
        window.location = "http://localhost:8888/sp-frontend/sucursales.html"
    });

    $('#myModalZoom').on('show.bs.modal', function(e) {
        var button = $(e.relatedTarget);
        var modal = $(this)
        var path = "assets/img/"+button.attr("id");
        var img = $("<img id='imgModal'/>").attr("src", path);
        modal.find('.modal-img').empty();
        modal.find('.modal-img').append(img);
    });

});
