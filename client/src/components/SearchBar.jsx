import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://careercruiser-backend.onrender.com/search?q=${query}`);
    setResults(response.data);
  };
  const clickHandler = (resultId) =>{
    navigate('/jobsearchbar/'+resultId)
  }

  return (
    <div className="bg-gray-100 h-screen">
      <Navigation/>
      <div className="flex justify-center mt-8 mb-4">
      <form onSubmit={handleSubmit} className="">
        <input className="rounded-lg p-1" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for jobs.." />
        {/* <button className="ml-2" type="submit">Search</button> */}
      </form>
      </div>
      <ul>
        {results.map((result) => (
          <div key={result._id} className='px-4 py-2'>
          <div className='h-36 w-full text-xs border-2 border-black-400 rounded-lg p-2 bg-white overflow-x-hidden'>
            <h3>{result.Title}</h3>
            <p>{result.Company}</p>
            <p>{result.Location}</p>
            <p>{result.Category}</p>
            <p>{result.Salary}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded my-2" onClick={()=>clickHandler(result._id)}>Apply</button>
          </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
