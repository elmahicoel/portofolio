<?php

    $name = $_POST['name'];
    $telefon = $_POST['telefon'];
    $email = $_POST['email'];
    $mesaj = '
        '.$_POST['name'].' vrea sa stie daca produsul se afla in stoc.
        Nume: '.$_POST['name'].'
        Telefon: '.$_POST['telefon'].'
        Email: '.$_POST['email'].'
        Produsul: '.$_POST['link'].'
       ';

//Trimite email
    mail("office@kidspot.ro", "Informatii stoc pentru " .$name, $mesaj);

?>