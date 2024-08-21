import { useEffect, useState } from "react";
import Loader from "./Loader";

function App() {
  const [fetched, setFetched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = "https://stoic-quotes.com/api/quote";

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

  const fetchQuote = useEffect(function () {
    fetchget(apiKey);
  }, []);
  fetchQuote;

  function handleClick(e) {
    e.preventDefault();
    fetchget(apiKey);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#7C93C3] h-screen">
      <p className="text-3xl font-bold font-bitter tracking-wide mb-3 text-center">
        Get inspired with random quotes
      </p>
      <div className=" text-center m-5 p-5 bg-[#55679C] border border-solid rounded-xl border-slate-950">
        <p className="text-xl text-[#1E2A5E] rounded-xl border-gray-400 font-semibold italic">
          &#34;{isLoading ? <Loader /> : fetched.text}&#34;
          {/* {fetched.text} */}
        </p>
        <p className="text-base text-teal-400">
          -{isLoading ? <Loader /> : fetched.author}
          {/* -{fetched.author} */}
        </p>
      </div>
      <button
        onClick={(e) => handleClick(e)}
        className=" bg-[#1E2A5E] text-blue-100 border rounded-xl border-black p-2 m-5 hover:scale-110 hover:text-teal-400 transition ease-in-out "
      >
        Seek Another
      </button>
    </div>
  );
}

export default App;
