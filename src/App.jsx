import { useEffect, useState } from "react";
import Loader from "./Loader";

function App() {
  const [fetched, setFetched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "https://stoic-quotes.com/api/quote";

  const fetchQuote = useEffect(function () {
    async function fetchget(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        var data = await response.json();
        setFetched(data);
        console.log(data);
      } catch (error) {
        throw new Error("error while fetching");
      } finally {
        setIsLoading(false);
        console.log(isLoading);
      }
    }
    fetchget(apiKey);
  }, []);
  fetchQuote;

  function handleClick() {
    window.location.reload();
  }

  return (
    <div className="flex flex-col items-center justify-center bg-slate-500 h-screen">
      <div className=" text-center m-5 p-5 bg-slate-800 border-solid rounded-xl border-slate-950">
        <p className="text-xl text-blue-500 rounded-xl border-gray-400">
          &#34;{isLoading ? <Loader /> : fetched.text}&#34;
          {/* {fetched.text} */}
        </p>
        <p className="text-xl text-blue-300">
          -{isLoading ? <Loader /> : fetched.author}
          {/* -{fetched.author} */}
        </p>
      </div>
      <button
        onClick={() => handleClick()}
        className=" text-black bg-slate-600 border-2 rounded-xl border-black p-2 m-5"
      >
        Regenerate
      </button>
    </div>
  );
}

export default App;
