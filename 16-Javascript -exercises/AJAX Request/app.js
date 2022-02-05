class GetHackerNewsData {
    constructor(url) {
        this.url = url;
    }

    callApi() {
        const array = [];
        fetch(this.url)
            .then(data => data.json())
            .then(data => data.slice(0, 10))
            .then(data => data.map(element => {
                return `https://hacker-news.firebaseio.com/v0/item/${element}.json`;
            }))
            .then(element => {
                const news = new RunArrayDelay(element, 1000);
                news.startCounter();
                
            })
            .catch(err => console.log(`something was wrong: the server said ${err} `))
    }
}

class RunArrayDelay {
    constructor(array, timer) {
        this.array = array.reverse(); // the array need to be parsed from 0 index to n-1 not the other way arround 
        // so i needed to reverse it as the counter is decreasing not increasing
        this.timer = timer;
        this.counter = this.array.length;
    }

    decrease() {
        if (this.array[this.counter] == undefined) {
            this.counter--;
            return null;
        } else {
            console.log(this.array[this.counter]);
            this.counter--;
        }
        
    }

    startCounter() {
        const iterator = setInterval(() => {

            if (this.counter === 0) {
                console.log(this.counter);
                clearInterval(iterator);
                console.log('done!');
            } else {
                this.decrease();
            }

        }, this.timer);
    }

    showData() {
        return console.log(this.array);
    }
}

const raspuns = new GetHackerNewsData('https://hacker-news.firebaseio.com//v0/newstories.json');

raspuns.callApi()
