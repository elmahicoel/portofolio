//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//De adaugat: disable the form submit button if the password does not match or is invalid

var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Ascunde hint-urile
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}
function arePaswerdsMatching() {
  return $password.val() === $confirmPassword.val();
}
function canSubmit() {
  return isPasswordValid() && arePaswerdsMatching();
}

function passwordEvent() {
  // Vezi daca parola indeplineste conditia > cu 8 caracrete
  if (isPasswordValid()) {
    // Ascunde daca este valida
    $password.next().hide(); // s-a folosit metoda .next() deoarece traversam DOM-ul iar dupa id-ul #password urmeaza span-ul care contine hint-ul pe care trebuie sa il ascundem.
  } else {
    // else show
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // vezi daca parola si confirmarea se potrivesc
  if (arePaswerdsMatching()) {
    // Ascunde daca se potrivest
    $confirmPassword.next().hide();
  } else {
    // else arata hint
    $confirmPassword.next().show();
  }
}
function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//Cand se intampla ceva in imput-ul password
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent)

// Ascunde hint daca se potrivesc
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent();

