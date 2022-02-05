// Proglem: It looks gross in smaller browser widths and small devices.
// Solutuion: To hide the text link and swap them out with a more appropriate navigation.

// Create a select and append to #menu.
var $select = $("<select></select>");
$('#menu').append($select);

// Cicle over menu links
$("#menu a").each(function () {
  var $anchor = $(this);
  // create an option
  var $option = $("<option></option>");

  // options value is the href of the link
  $option.val($anchor.attr("href"));

  // options text is the text of the link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);

  // Deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
});


// Bind listener to the select
$select.change(function () {
  // go to select location
  window.location = $select.val(); //metoda window.location schimba trimite browserului valoarea pe care o dai.
});