let apiQuotes = [];
let quoteEl = document.getElementById('quote');
let authorEl = document.getElementById('author');
let tweetBtn = document.getElementById('twitter');
let newQuoteBtn = document.querySelector('.new-quote');

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteEl.textContent = quote.text;
  authorEl.textContent = quote.author ?? 'Unknown';
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();
