// // Hide the Waarning    
// // Show the Waarning slowly
// $(".warning").hide(800).show(1500);
// Asta a fost pentru primele lectii. Mai jos avem o alta metoda mult mai inteligenta de apela functia si anume doar cand este incarcat si contruita toata pagina prin metoda 'document ready'

$(document).ready(function () { //am declarat functia anonima - este mai uzual
    $('.warning').hide().show(1500);
});

