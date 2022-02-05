const data = ['Karlie', 'William', 'Julia', 'Lucian', 'Valentin', 'Mama', 'Tata'];
let searchInput = document.querySelector('#search-input');
searchInput.addEventListener('keyup', searchForNames);

function displayValue() {
  setTimeout(() => {
    console.log(searchInput.value);  
  }, 300);
}

// trebuie sa caut in array si apoi sa returnez toate cuvintele care contin literele tastate.
function searchForNames() {
  setTimeout(() => {
    data.map(item => {
      if (item.toLowerCase().includes(searchInput.value)) {
        return console.log(item);
      }
    });  
  }, 1000);
  
}

