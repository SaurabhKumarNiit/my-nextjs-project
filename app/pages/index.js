'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const HomeData = () => {
  const [type, setType] = useState('');
  const [searchFor, setSearchFor] = useState('');
  const [organ, setOrgan] = useState('');
  const [error, setError] = useState('');

  const getOrganOptions = () => {
    if (type === 'transplant') {
      return ['lungs', 'kidney', 'liver',  'pancreas'];
    } else if (type === 'oncology') {
      return ['stomach', 'breast','lungs', 'liver', 'pancreas', 'bile_duct', 'adrenal', 'rectum', 'small_intestine', 'colon'];
    }
    return [];
  };

  const validateForm = () => {
    if (!type  || !organ) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Proceed with the form submission or navigation logic
      console.log('Form submitted:', { type, organ });
      // You can add navigation logic or API calls here
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
  };

  const searchButtonStyle = {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const searchButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1>Search Form</h1>
      <div style={formGroupStyle}>
        <label style={labelStyle}>
          Type:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Type</option>
            <option value="transplant">Transplant</option>
            <option value="oncology">Oncology</option>
          </select>
        </label>
      </div>
      {/* <div style={formGroupStyle}>
        <label style={labelStyle}>
          Search for:
          <select
            value={searchFor}
            onChange={(e) => setSearchFor(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Search For</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
          </select>
        </label>
      </div> */}
      <div style={formGroupStyle}>
        <label style={labelStyle}>
          Organ:
          <select
            value={organ}
            onChange={(e) => setOrgan(e.target.value)}
            style={selectStyle}
          >
            <option value="">Select Organ</option>
            {getOrganOptions().map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Link
        href={{
          pathname: '/searchView',
          query: {
            search: `type=${type}&searchFor=${searchFor}&organ=${organ}`,
          },
        }}
      >
        <button style={Object.assign({}, searchButtonStyle, organ && searchButtonHoverStyle)} onClick={handleSubmit}> 
          Search
        </button>
      </Link>
    </div>
  );
};

export default HomeData;



