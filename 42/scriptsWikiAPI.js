let userInput;
let searchURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&exlimit=12&format=json&search=';

function setup() {
  noCanvas();

  userInput = select('#userinput');
  userInput.changed(goWiki);
  goWiki();

  function goWiki() {
    let term = userInput.value();
    let url = searchURL + term;

    loadJSON(url, gotData, 'jsonp');
  }

  function gotData(data){
//   let page = data.query.pages;
//   let pageId = Object.keys(data.query.pages)[0];
//   let link = page[pageId].title + page[pageId].extract;
//   createP("<a href=" + link + ">" + title + ": " + desc + "</a>");
  // createP(desc);
//  createP(link);
// console.log(page[pageId].title + page[pageId].extract);
let title = data[1][0];
let cont = data[2][0];
let link = data[3][0];
let list = data[2];

let titles = data[1];
let conts = data[2];
let links = data[3];

var text = titles.map(function(itm,i){
   return '<li><a target="_blank" href=' + links[i] + '>' + [itm,conts[i]] + '</a></li>';
}).join('<hr/><br/>');

 createP(text + '<hr/>');

document.getElementById('userinput').onclick = function() {
//  location.reload(true);
 $('#ul').remove();
 $('br').remove();
 $('hr').remove();
 $('p').remove();
}
}
}