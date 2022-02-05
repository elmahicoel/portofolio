"use strict";
var numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var buttonNext = document.getElementById('next');
var buttonback = document.getElementById('prev');
var content = document.querySelector('.content');
function Iterator() {
    var index1 = 0;
    var index2 = 1;
    var arraySliced = numere.slice(index1, index2);
    function goNext(array, chunks) {
        if (chunks === void 0) { chunks = 1; }
        if (index2 < array.length) {
            index1 += chunks;
            index2 = index1 + chunks;
            arraySliced = numere.slice(index1, index2);
            console.log("goNext i:" + index1 + ", i:" + index2);
            return arraySliced;
        }
        else {
            return "You have reached the end of the array!";
        }
    }
    function goBack(array, chunks) {
        if (chunks === void 0) { chunks = 1; }
        if (index2 < array.length) {
            index1--;
            index2--;
            arraySliced = numere.slice(index1, index2);
            console.log("goBack i:" + index1 + ", i:" + index2);
            return arraySliced;
        }
        else {
            return "You have reached the begining of the array";
        }
    }
    var methods = {
        goNext: goNext,
        goBack: goBack,
        arraySliced: arraySliced
    };
    return methods;
}
var iterate = Iterator();
content.innerHTML = iterate.arraySliced.toString();
buttonNext.addEventListener('click', function () {
    content.innerText = iterate.goNext(numere, 1);
});
buttonback.addEventListener('click', function () {
    content.innerText = iterate.goBack(numere, 1).toString();
});
