// Problem: use when clicking on image goes to a dead end.
// Solution: Create an overlay with the large image - Light Box

var $overlay = $('<div id="overlay"></div>'); //acesta este un jQurey object  iar variabila si valoarea ei se noteaza de obicei si cu semnul $ la inceput
var $image = $("<img>");
var $caption = $("<p></p>");
//  An image to overly
$overlay.append($image);

//  A captiom to overlay
$overlay.append($caption);

//  Add the overlay
$('body').append($overlay); //ii dam metodei append atributul overlay;


// 1. Click on a image - click on the link that sorrounds the image - capture the click event on a link to an image
$('#imageGallery a').click(function (event) {
    event.preventDefault(); //in mod mormal cand dai click pe un link, broser-ul ca si default tinde sa urmareasca comportamentul default, adica sa mearga pe link-ul respectiv. Am folosit metoda 'event.preventDefault' pentru a impiedica acest lucru, insa functiei anonime i-a fost dat atributul 'event'.
    var imageLocation = $(this).attr('href'); //am pus o variabila cu numele imageLocation ca in momenul in care dai click pe attributul href sa incarce in variabila  imageLocation
    //  Update the overlay with the image linked in the link
    $image.attr("src", imageLocation); // prin metoda .attr( attributeName, value )

    //  Show the overlay
    $overlay.show();

    //  Get child alt attribute and set caption
    var $getAlt = $(this).children().attr('alt');
    $caption.text($getAlt);

});

// 3. When overlay is clicked
$overlay.click(function () {
    $overlay.hide();
});
// 3.1 Hide the overlay



