const quotes = [
  {
    quote:
      "비혼주의는 결혼으로 완성된다. 자신이 옳았음을 확인할 수 있기 때문이다.",
    author: "주호민",
  },
  {
    quote: "늦었다고 생각했을 때가 너무 늦었다.",
    author: "박명수",
  },
  {
    quote: "육체는 단명이나 근성은 영원하다.",
    author: "김성모",
  },
  {
    quote: "내가 고자라니!",
    author: "심영",
  },
  {
    quote: "누가 기침소리를 내었는가?",
    author: "궁예",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
