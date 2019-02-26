const API =  "https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?";
const shareTwitter = "https://twitter.com/intent/tweet?text=";
const colorsArr = [
  "#14cc8d",
  "#1481cc",
  "#cc3114",
  "#bb14cc",
  "#14ccbb",
  "#5f14cc",
  "#cc8d14",
  "#2E8B57"
];
const article = document.getElementById('article');
const author = document.querySelector('.author');
const href = document.querySelector('.href');
const newArticleButton = document.getElementById("new");
const shareButton = document.getElementById('share');
let text = ''

function onClick() {
  getRandomColor()
  getData()
}

// Получаем рандомный цвет для фона
function getRandomColor() {
  axios({
    method:'get',
    url:'http://www.colr.org/json/color/random'
  })
    .then(function (response) {
      document.body.style.background = "#" + response.data.new_color
    });
}

// напишем функцию getData
function getData() {
  console.log('YEEE')
  // GET request for remote image
  axios({
    method:'get',
    url:API
  })
    .then(function (response) {
      text = JSON.parse(response.data.slice(0, -1).slice(2))
      console.log(text)
      article.innerHTML = text.quoteText
      author.innerHTML = text.quoteAuthor
      href.innerHTML = text.quoteLink
      shareTwitterFunc(text.quoteText)
    });
};

function shareTwitterFunc(quote) {
  shareButton.setAttribute('href', shareTwitter + quote);
}
