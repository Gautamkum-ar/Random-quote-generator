const quoteText = document.querySelector(".quote"),
  author = document.querySelector(".author .name"),
  quoteBtn = document.querySelector("button"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter");

//randomQuote function modification changes from git desktop.
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loding Quote...";
  //fetching random quotes/data from the API and parshing it into javascript object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      author.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  //the SpeechSynthesisUtterance is a web speech api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${author.innerText}`
  );
  speechSynthesis.speak(utterance); //speak methd of speechsynthesis speak the utterance
});
copyBtn.addEventListener("click", () => {
  //copying the quote text on copybtn Click
  //writeText() property writes the specified text string to the system clipboard.
  navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "blank"); //opening a new twitter tab with passing quote in the url
});

quoteBtn.addEventListener("click", randomQuote);
