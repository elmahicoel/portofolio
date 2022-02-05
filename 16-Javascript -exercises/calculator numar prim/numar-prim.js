function prime(n) {
  var c = 0;
  for ( let i=2; i < n; i++ ) {
      if ( n%i==0 ) {
        c++;
      }
  }
  
  if (c == 0) {
    console.log("Este Prim");
  } else {
    console.log("Nu este prim, deoarece este divizibil cu " + c);
  }
}
