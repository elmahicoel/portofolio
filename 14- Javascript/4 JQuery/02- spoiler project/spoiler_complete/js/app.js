// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoiler and reveal them trough user interaction

// 1. Hise spoiler
$('.spoiler span').hide();
// 2. Add a button
$('.spoiler').append('<button>Reveal Spoiler!</button>');
//3 When the button is pressed
$('button').click(function () {
    // 3.1 show spoiler net to the button clicked
    $(this).prev().show(); //show previews sibling of the element button, in cazul acesta este un span - span-ul cu textul Darth Vader etc
    //3.2 Get rid of the button
    $(this).remove();
});