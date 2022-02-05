// basic base64 string convertion
const base64 = btoa('Lucian Dumitru');
const string = atob(base64);
console.log(base64);
console.log(string);

// // fetch an image from a link

const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
    reader.addEventListener('load', console.log(blob.size + ' Kb'));
  }));


const renderImage = (image) => {
    const renderPic = document.querySelector('.render-pic');
    renderPic.setAttribute('src', image);
}

toDataURL(null)
  .then(dataUrl => {
    renderImage(dataUrl);
  });



// transform the picture from a local input file
const upload = document.querySelector('#upload');
upload.addEventListener('change', () => {
  let file = upload.files[0];
  console.log(`You selected ${file.name}, type ${file.type}, size is ${file.size}`);

  transformLocalImage(file)
    .then(data => { 
      let googleData = data.replace('data:', '');
      console.log('The row base64 data is: ' + data)
      console.log('Google data trimmed is: ' + googleData);
      renderImage(data);
    })
    .catch(err => console.log(err));
  
});

const transformLocalImage = image => {
  return new Promise((resolve, reject) => {
    
    if (image.type.startsWith('image')) {
      const reader = new FileReader();  
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject('There was a problem reading the file');
      reader.readAsDataURL(image);
    } else {
      reject('File is in wring format');
    }

  });
}
