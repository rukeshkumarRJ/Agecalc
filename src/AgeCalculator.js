import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageYears, setAgeYears] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);
  const [ageDays, setAgeDays] = useState(0);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    // Adjust the months and days if they are negative
    let adjustedMonths = monthsDiff;
    let adjustedDays = daysDiff;
    if (daysDiff < 0) {
      adjustedMonths--;
      adjustedDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate() - birthDateObj.getDate() + today.getDate();
    }
    if (monthsDiff < 0) {
      adjustedMonths = 12 - birthDateObj.getMonth() + today.getMonth();
    }

    setAgeYears(yearsDiff);
    setAgeMonths(adjustedMonths);
    setAgeDays(adjustedDays);
  };

  return (
    <div class="main">
      <div class="npApp justify-content-center align-items-center">
      <h2>Age Calculator</h2><br/>
      <b><label htmlFor="birthDate">Enter your date of birth:</label><br/></b><br></br>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        /><br/><br/>
      <button onClick={calculateAge}>Calculate Age</button><br/><br/>
      <div>
        <b><p>Your are {ageYears} years old.</p></b>
        <p>Months: {ageMonths} Days: {ageDays}</p>
        <p></p>
    
    </div></div>
    </div>
  );
};

export default AgeCalculator;
