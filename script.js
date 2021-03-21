//let apiQuotes = [];
let quoteContainer = document.getElementById('quote-container');
let quoteEl = document.getElementById('quote');
let authorEl = document.getElementById('author');
let tweetBtn = document.getElementById('twitter');
let newQuoteBtn = document.getElementById('new-quote');

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check Quote length to determine styling
  if (quote.text.length > 120) {
    quoteEl.classList.add('long-quote');
  } else {
    quoteEl.classList.remove('long-quote');
  }
  quoteEl.textContent = quote.text;
  authorEl.textContent = quote.author ?? 'Unknown';
}

// Get Quotes From API
async function getQuotes() {
  const proxyUrl = 'https://powerful-lowlands-81258.herokuapp.com/';
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${authorEl.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
tweetBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);

// On Load
getQuotes();
