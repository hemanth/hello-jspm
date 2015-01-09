import fetch from 'fetch'

console.log(fetch);

class XkcdApi {
    constructor() {
        this.url = "http://xkcd-imgs.herokuapp.com/"
    }
    getImg() {
    	console.log("Fetching image form", this.url);
        return fetch(this.url)
    }
}

export default new XkcdApi();
