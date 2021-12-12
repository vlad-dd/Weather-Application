import React from "react";
import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_WEATHER_QUERY } from "./Queries";



const Home = () => {

const [inputParam, setInputParam] = useState('')

const setInput = (e) => {
    setInputParam(e.currentTarget.value)
}

const [setQuery, {loading,data, error}] = useLazyQuery(GET_WEATHER_QUERY)

  return (
    <div>
      <h1>Search for weather: </h1>
      <input value={inputParam} onChange={(e) => setInput(e)} placeholder="City..." />
      <button onClick={() => setQuery({variables:{name: inputParam}})}>Search</button>
     {loading && <p>Data is loading...</p>}
     <div>
     {data && <div>{data.getCityByName.name} {data.getCityByName.country}<div>{data.getCityByName.weather.summary.title}</div></div>}
     </div>
    </div>
  );
};

export default Home;
