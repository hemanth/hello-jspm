import xkcd from './xkcd'
import showComic from './show-xkcd'
console.dir(xkcd.getImg());
xkcd.getImg()
  .then(showComic)