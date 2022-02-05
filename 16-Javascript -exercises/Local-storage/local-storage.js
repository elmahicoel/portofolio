// let = 
// localStorage.setItem("Nume", "Lucian");
// const subText = document.querySelectorAll(".sub-text")[0];
// subText.textContent = localStorage.getItem("Nume");

    let getValue = document.querySelectorAll("#get-value")[0];
    const subText = document.querySelectorAll(".sub-text")[0];
    
    
    const setLocalStorage = function() {
      const button = document.querySelectorAll("#set-local-storage")[0];
      
      button.addEventListener("click", ()=> {
        localStorage.setItem("nume", getValue.value);
        
        subText.textContent = localStorage.getItem("nume");
      })
    };
    local = document.querySelectorAll("#local-storage")[0];
    local.textContent = localStorage.getItem("nume");
    setLocalStorage();

// ca sa salvezi un obiect in local storage trebuie sa il transformi din obiect in JSON si daca vrei apoi sa-l transformi intr-un obiect trebuie sa il parsezi. exemplu: https://www.youtube.com/watch?v=hOCYNdgsUfs

//Exemplu
// let obiect = [1, 2, 4];
// obiectString = JSON.stringify(obiect);
// console.log(obiectString);
// console.log(JSON.parse(obiectString));