import React, { useEffect, useState, useRef } from "react";

export default function QuoteCard() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_QUOTE_API_KEY;

      if (!apiKey) {
        throw new Error("API key not found");
      }

      const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
          "X-Api-Key": apiKey,
        },
      });
      const data = await res.json();
      const random = data[0];
      setQuote(random.quote);
      setAuthor(random.author);
    } catch (err) {
      setQuote("Oops! Something went wrong while fetching the quote.");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchQuote();
    }

    // Cleanup function
    return () => {
      // Reset for next mount if needed
    };
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="relative p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl border border-blue-100 text-center max-w-full mx-auto mr-35 ml-35 mt-8 transform hover:scale-105 transition-all duration-300">
      {/* ...rest of your component remains the same... */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full p-3 shadow-lg mb-2">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full opacity-20 -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-200 rounded-full opacity-20 translate-y-8 -translate-x-8"></div>

      {loading ? (
        <div className="py-12">
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
          <p className="text-gray-500 font-medium">Fetching inspiration...</p>
        </div>
      ) : (
        <div className="py-4">
          <div className="mb-4 mt-4 relative">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-800 mb-1">
              "{quote}"
            </p>
            <div className="absolute -top-2 -left-2 text-4xl text-blue-300 font-serif">
              "
            </div>
            <div className="absolute -bottom-4 -right-2 text-4xl text-blue-300 font-serif">
              "
            </div>
          </div>

          <div className="mb-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-3"></div>
            <p className="text-lg font-semibold text-gray-700 tracking-wide">
              — {author}
            </p>
          </div>
        </div>
      )}

      <button
        onClick={handleNewQuote}
        disabled={loading}
        className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
          </svg>
          New Quote
        </span>
      </button>

      <div className="absolute top-4 right-4 text-yellow-400 animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-4 left-4 text-blue-400 animate-bounce">
        💡
      </div>
    </div>
  );
}
