const container = document.querySelectorAll(".col")[0];
const button1 = document.querySelectorAll("button")[0];
const button2 = document.querySelectorAll("button")[1];
const input = document.querySelectorAll("input")[0];
const config = {
	attributes: true,
	childList: true,
	subtree: true
}

callback = function name(mutationsList, observer) {
	console.log(mutationsList)
	for (let mutation of mutationsList) {
		console.log(mutation);
	}
}

const observer = new MutationObserver(callback);
observer.observe(container, config);

function addElement(element) {
  button1.addEventListener("click", () => {
    const ele = document.createElement(element);
    container.appendChild(ele);
  });
}

function removeElement() {
  button2.addEventListener("click", () => {
    container.removeChild(container.lastChild);
  });
}

addElement("input");
removeElement();

