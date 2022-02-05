function ceas() {
  var oraExacta = new Date();
  var extrageOra = oraExacta.toLocaleTimeString();
  document.getElementById('ceas-js').innerHTML = extrageOra;

  /* asta este o alta metoda */
  // var ora = oraExacta.getHours();
  // var minut = oraExacta.getMinutes();
  // var secunde = oraExacta.getSeconds();
  // document.getElementById('ceas-js').innerHTML = ora + ":" + minut + ":" + secunde;
}

setInterval(ceas, 1000); // apelez functia ceas() si setez un interval de afisare de o secunda
