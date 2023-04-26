import React, { useState } from "react";


export default function SearchBar( {handleSearchClick, city, setCity}) {
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input
        style={{ width: '300%', padding: '12px', fontSize: '24px' }}
        placeholder="Search City"
        onChange={(event) => setCity(event.target.value)}
      />
      <button
        style={{ marginLeft: '10px', padding: '12px 20px', fontSize: '24px' }}
        onClick={() => { handleSearchClick(city) }}
      >
        Search
      </button>
    </div>
  );
}
