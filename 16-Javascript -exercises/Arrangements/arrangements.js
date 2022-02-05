// -------------------- 
// const cuvant = 'luciandumitru'
// for (const [index, litera] of Array.from(cuvant).entries()) {
// 	console.log(index, litera);
// }


const button = document.querySelector('button');
let inputValue = document.querySelector('input');

function addDots(str) {
	const charArray = Array.from(str);
	const arrLength = charArray.length;
	const resultArr = [];

	for (let i = 1; i < arrLength; i++) {
		const muttable = charArray.slice(0, (arrLength + 1));
		if ( i > 0 && (arrLength - 1) !== 1) {
			console.log('poc');
			muttable.splice(i, 0, '-');
			resultArr.push(muttable.join(''));
		}

	}

	return resultArr
}

function generateHtml(array) {
	const html = document.querySelector('#results');
	let result = ''
	array.forEach((item) => {
		result += `<p>${item}</p>`;
	})

	html.innerHTML = result;
}

button.addEventListener('click', () => {
	generateHtml(addDots(inputValue.value));
});

inputValue.addEventListener('keypress', (evt) => {
	if (evt.keyCode === 13) {
		generateHtml(addDots(inputValue.value));
	}
})





