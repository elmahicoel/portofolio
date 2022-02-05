// modelul lui Kyle Simpson 

function Closure() {
  let username;
  let password;
  let numarulPulii = 5;

  function doLogin(user, pw) {
    username = user;
    password = pw;
    return username + password;
  }

  function getRandom(number) {
    num = number;
    let random = Math.floor(Math.random() * number + 1);
    return random * numarulPulii;
  }

  const publicApi = {
    login: doLogin,
    generateRandom: getRandom
  }
  
  return publicApi;

};

const lucian = Closure();
console.log(lucian.generateRandom(2000));
console.log(lucian.login('Valentin', 'Dumitru'));


/// SAAU ALT EXEMPLU
//https://toddmotto.com/mastering-the-module-pattern/

const hello = (function () {
  const nume = 'Lucian';
  const prenume = 'Dumitru';
  const varsta = 33;
  const ocupatie = 'Programator';


  function _privateMethod() { // this method is private!
    return nume + prenume;
  }

  return {
    datePersonale: function () {
      return `${nume} ${prenume}`;
    },
    varstaOcupatie: function () { // calling a private method
      return `${_privateMethod()} ${varsta * 2 / 2} , ${ocupatie}`;
    }
  }
})();

console.log(hello.datePersonale());
console.log(hello.varstaOcupatie());