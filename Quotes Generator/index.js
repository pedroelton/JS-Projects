const quoteEl = document.getElementById('quote')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)

generateQuote()

async function generateQuote() {
    
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    quoteEl.innerHTML = data.quote
    
    
}

/*

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
 
 */