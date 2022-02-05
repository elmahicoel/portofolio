function InfoStoc() {
    $(this).preventDefault();
    var data = {
        name: $("#form_name").val(),
        telefon: $("#form_telefon").val(),
        email: $("#form_email").val(),
        link: $(location).attr('href')
    };
$.ajax({
    type: "POST",
    url: "catalog/view/theme/BurnEngine/info-stoc/email.php",
    data: data,
    success: function(){
        alert('Mesajul a fost trimis! Vei fi contactat in cel mai scurt timp.');
    }
    }); 
}