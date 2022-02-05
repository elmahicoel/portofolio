
(function () {

        let buton = document.getElementById('buton');
    
        buton.addEventListener('click', function () {
        let n = parseInt(document.getElementById('numar').value);
        let factorial = function (n) {
        if (n <=1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
        };
    document.getElementById('rezultat').innerHTML = (' ' + factorial(n));
        
    });
    
})();










