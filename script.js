let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const tweetBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loader
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

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
  loading();
  const proxyUrl = 'https://powerful-lowlands-81258.herokuapp.com/';
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    apiQuotes = await response.json();
    complete();
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
