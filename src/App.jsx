import { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import './index.css';

function App() {
  // Variable to store Quote
  const [quote, setQuote] = useState("");

  // Variable to store Author
  const [author, setAuthor] = useState("");

  // Variable to store loading status
  const [loading, setLoading] = useState(true);

  // Function to fetch Quotes and Author
  const fetchQuote = async () => {

    // Set loading to true
    setLoading(true);
  
    try {
      // First try ZenQuotes with CORS proxy
      const zenURL = "https://api.allorigins.win/get?url=" + 
        encodeURIComponent("https://zenquotes.io/api/random?" + new Date().getTime());
  
      const res = await fetch(zenURL);
  
      const data = await res.json();

      // Parse as the data.contents is a string
      const parsed = JSON.parse(data.contents);
      
      // Check wether the API works fine or limit cross.
      if (parsed[0].q = "Too many requests. Obtain an auth key for unlimited access.") throw new Error("ZenQuotes failed");

      // Set Quote and Author from ZenQuotes
      setQuote(parsed[0].q);
      setAuthor(parsed[0].a);
    } 
    catch (error) {
      console.warn("ZenQuotes failed. Trying FavQs...", error.message);
  
      try {
        // If ZenQuotes fails, try FavQs
        const favqsURL = "https://api.allorigins.win/get?url=" + 
          encodeURIComponent("https://favqs.com/api/qotd?" + new Date().getTime());
  
        const response = await fetch(favqsURL);
        if (!response.ok) throw new Error("FavQs also failed");
  
        const data = await response.json();
        const parsed = JSON.parse(data.contents);
  
        // Set Quote and Author from FavQs
        setQuote(parsed.quote.body);
        setAuthor(parsed.quote.author);
  
      }
      catch (fallbackError) {
        console.error("Both APIs failed!", fallbackError.message);
  
        // If both fail
        setQuote("Could not fetch quote. Try again later! 😥");
        setAuthor("");
      }
    }
    finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='container'>
      <QuoteCard 
      quote = {quote}
      author = {author}
      loading = {loading}
      onNewQuote = {fetchQuote}
      />
    </div>
  );
}

export default App;