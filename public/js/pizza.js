$(document).ready(function() {
    $('#add_pizza_btn_modal').click(function() {
        var name = $('#pizza_name').val();
        var sauce = $('#sauce').val();
        var viandes = $('#viandes').val();
        var fromages = $('#fromages').val();
        var accompagnements = $('#accompagnements').val();
        var piquante = $('sauce_piquante').is(':checked');
        var file = $('#image_pizza').val();
        $.post("/add_pizza",{name, sauce, viandes, fromages, accompagnements, piquante, file}, function() {
            console.log("ok");
            $('#affichage_pizzas').load(window.location.href + ' #affichage_pizzas');
            
        })
    })
})