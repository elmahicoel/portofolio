function charCount(str) {
	const chars = {};

	for (let i = 0; i < str.length; i++){
		let letter = str[i].toLowerCase();
		//conditia se bazeaza pe faptul ca in obiectul chars exista ca si key str[i] pentru ca nu returneaza undefined cand incercam sa il accesam
		//if the char is a number/letter AND is a key in object, add one to count
		if (chars[letter]) {
			chars[letter]++;
		}
		// if the character is a number or letter not in object add it ot the objeect and set his value to 1
		else {
			chars[letter] = 1
		};
	}
	return chars;
}
console.log(charCount('Helloh'));