import React, { useState } from "react";


export default function SearchBar( {handleSearchClick}) {
  const [city, setCity] = useState("");

  return (
    <div >
      <input
        placeholder="Search City"
        onChange={(event) => setCity(event.target.value)}
      />
      <button
        onClick={() => { handleSearchClick(city) }}
      >
        Search
      </button>
    </div>
  );
}
