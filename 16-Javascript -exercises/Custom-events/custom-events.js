const element = document.querySelector('button');
const customEvent = new Event('customShit');


element.addEventListener('customShit', () => {
  console.log('custom event fired');
});

element.dispatchEvent(customEvent);
