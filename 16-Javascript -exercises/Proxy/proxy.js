/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 *
 * */

const gameSettings = { date: '18.09.2020' };

const gameSettingsProxy = new Proxy(gameSettings, {
  get: (obj, property) => {
    return property in obj ? obj[property] : 'lucian';
  },
  set: (obj, property, value) => {

    if (property === 'difficulty' && !['easy', 'medium', 'high'].includes(value.toLowerCase())) {
      throw new Error('Difficulty is invalid mother fucker!');
    } else {
      obj[property] = value;
    }
  },
  has: (obj, property) => {
    if (property === 'difficulty') {
      return false;
    }
    return property in obj;
  }
});

gameSettingsProxy.difficulty = 'easy';
gameSettingsProxy.difficulty = 'super easy';
console.log(gameSettingsProxy.date);
console.log(gameSettingsProxy.difficulty);
