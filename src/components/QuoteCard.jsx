function QuoteCard({quote, author, loading, onNewQuote}){
    return(
        <div className="card">
            <h2 className="heading">Random Quote</h2>
            {loading ? (
                <p className="loading"> Loading...</p>
            ) : (
                <>
                    <p className="quote"> {quote}</p>
                    <div className="line"></div>
                    <p className="author"> - {author}</p>
                </>
            )}
            <button className="btn" onClick={onNewQuote}> Get New Quote </button>
        </div>
    )
}

export default QuoteCard;