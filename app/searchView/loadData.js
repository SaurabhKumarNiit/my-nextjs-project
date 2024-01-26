// pages/doctors.js
"use client";
import React, { useEffect, useState } from "react";

const DoctorsPage = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log(window.location);
      let myKeys = window.location.search;
      // console.log("k & V :", myKeys);

      let urlParams = new URLSearchParams(myKeys);

      let param1 = urlParams.get("search");

      // console.log(param1);

      let filterParams = new URLSearchParams(param1);

      // Get values for type, searchFor, and organ
      let type = filterParams.get("type");
      let searchFor = filterParams.get("searchFor");
      let organ = filterParams.get("organ");

      console.log(type, searchFor, organ);

      try {
        // const response = await fetch(
        //   'https://api.coc.houseworksinc.co/api/v1/doctors/?type=transplant&organ=lungs'
        // );
        // const result = await response.json();
        // setDoctorsData(result.results);

        const apiUrl = `https://api.coc.houseworksinc.co/api/v1/doctors/?type=${type}&organ=${organ}`;

        const response = await fetch(apiUrl);
        const result = await response.json();
        setDoctorsData(result.results);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Filtered Doctors</h1>
      <ul>
        {doctorsData.map((doctor) => (
          <li key={doctor.id}>
            <h3>{`${doctor.first_name} ${doctor.last_name}`}</h3>
            <p>NPI: {doctor.npi}</p>
            <p>Speciality: {doctor.primary_speciality}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsPage;
