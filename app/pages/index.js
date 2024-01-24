'use client'
// import { useClient } from 'next/client';
import React, { useState } from 'react';
import Link from 'next/link'



const HomeData = () => {
  const [type, setType] = useState('');
  const [searchFor, setSearchFor] = useState('');
  const [organ, setOrgan] = useState('');


  return (
    <div>
      <h1>Search Form</h1>
      <div>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="transplant">Transplant</option>
            <option value="oncology">Oncology</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Search for:
          <select value={searchFor} onChange={(e) => setSearchFor(e.target.value)}>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Organ:
          <select value={organ} onChange={(e) => setOrgan(e.target.value)}>
            <option value="lungs">Lungs</option>
            <option value="kidney">Kidney</option>
            <option value="liver">Liver</option>
          </select>
        </label>
      </div>

      <Link
  href={{
    pathname: '/searchView',
    query: {
      search: `type=${type}&searchFor=${searchFor}&organ=${organ}`
    }
  }}
>
  Search
</Link>
    
    </div>
  );
};

export default HomeData;
