export default (url) => {
  var comic = JSON.parse(url._body);
  var elem = document.querySelector('figure');
  document.querySelector('.spinner').remove();
  elem.innerHTML = `
  <figure> 
    <a href="${comic.url}"><img src="${comic.url}" /></a> 
    <figcaption>"${comic.title}"</figcaption>
  </figure>
  `
}