"use strict";

const $searchBtn = $('#search-gif');
const $gifParty = $('#gif-party');
const $removeBtn = $('#remove-gif');

$searchBtn.on('click', getSearchVal);
$removeBtn.on('click', removeGif);

/** Make random number */

function makeRandNum() {
  return Math.floor(Math.random() * 50);
}

/** Make an image */

function addImg(url) {
  const $img = $('<img>');
  $img.attr('src', url);
  $gifParty.append($img);
}

/** Append the gif to the DIV */

function addGifs(res) {
  const randomGifNum = makeRandNum();
  const imgUrl = res.data.data[randomGifNum].images.original.url;

  addImg(imgUrl);
}

/**Remove all elements inside of gifParty */
function removeGif(e) {
  e.preventDefault();
  $gifParty.empty();
}

/** Retrieving input from search bar and sends HTTP request */

async function getSearchVal(e) {
  e.preventDefault();
  let searchTerm = $('#search-term').val();
  $('#search-term').val("");

  let response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q: searchTerm, api_key: 'q7MxlJQCOVBgdiLRTBj9yGQcO5v4O8pD' } });
  console.log(response, 'response');
  addGifs(response);

}