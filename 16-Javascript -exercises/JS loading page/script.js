(function () {
    // pentru butonnul "GO"
    $('.overlay').hide();
    $('#button').click(function () {
        $('#button').hide();
        $('.overlay').show();
    });
    $('.overlay').click(function () {
        $('#button').show();
        $('.overlay').hide();
    });

    // Pentru input-ul search
    const $search = $('#search').attr('value');
    $('#search').focus(function () {
        $(this).attr('value', '');
        $(this).animate({
            width: "300px",
        }, 300);

    }).focusout(function () {
        $('#search').attr('value', $search);
        $(this).animate({
            width: "150px",
        }, 300);
    });

})();