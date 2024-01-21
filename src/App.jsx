import React, { useState } from "react";
import styled from "@emotion/styled";
import Flag from "./assets/uzb.png";

import "./index.css";

const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 45px;
  padding: 18px;
  border: 1px solid black;
  border-radius: 8px;
`;
const companies = [
  {
    id: 1,
    codes: [90, 91],
    icon: "https://beeline.uz/favicon.ico",
  },
  {
    id: 2,
    codes: [94, 93, 50],
    icon: "https://ucell.uz/img/favicon.ico",
  },
  {
    id: 3,
    codes: [33],
    icon: "https://humans.uz/app-icons/favicon-32x32.png",
  },
  {
    id: 4,
    codes: [99, 98, 77, 95],
    icon: "https://uztelecom.uz/images/favicon.ico",
  },
  {
    id: 5,
      codes: [88, 97],
      icon: "https://mobi.uz/images/favicon.ico",
    },
    
];

const App = () => {
  const [displayText, setDisplayText] = useState(""); // State to manage the displayed text

 
  const handleButtonClick = (text) => {
    if (text === "delete") {
      // Handle delete button
      setDisplayText((prevText) => prevText.slice(0, -1));
    } else if (displayText.length < 12) {
      // Check if the entered text is a valid phone number (assuming 11 digits for simplicity)
      const formattedText = displayText.replace(/\s|-/g, ''); // Remove existing spaces and hyphens
      const formattedWithSpaces = formattedText.replace(/(\d{2})(\d{3})(\d{2})/, '$1 $2-$3-');

      if (formattedText.length === 12) {
        // If 12 characters have been entered, check if the color is red (assuming you have a class named 'red' for that)
        const contentElement = document.querySelector('.content');
        if (contentElement && contentElement.style.color === 'red') {
          // Stop further entry if the color is red
          return;
        }
      }

      // Continue with updating the displayed text
      setDisplayText((prevText) => formattedWithSpaces + text);
    }
  };
  const getIconForCode = (code) => {
    const matchingCompany = companies.find(company => company.codes.includes(code));
    return matchingCompany ? matchingCompany.icon : null;
  };
  return (
    <div>
      <div className="container">
        <Content>
        <img className="img" src={getIconForCode(parseInt(displayText, 10))} alt="" />
          <h2>{displayText}</h2>
        </Content>
        <Numbers>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0].map((number) => (
             <button key={number} onClick={() => handleButtonClick(number)}>
              {number}
            </button>
          ))}
          <button onClick={() => handleButtonClick("delete")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(225,7,7,1)"
            >
              <path d="M6.53451 3H20.9993C21.5516 3 21.9993 3.44772 21.9993 4V20C21.9993 20.5523 21.5516 21 20.9993 21H6.53451C6.20015 21 5.88792 20.8329 5.70246 20.5547L0.369122 12.5547C0.145189 12.2188 0.145189 11.7812 0.369122 11.4453L5.70246 3.4453C5.88792 3.1671 6.20015 3 6.53451 3ZM12.9993 10.5858L10.1709 7.75736L8.75668 9.17157L11.5851 12L8.75668 14.8284L10.1709 16.2426L12.9993 13.4142L15.8277 16.2426L17.242 14.8284L14.4135 12L17.242 9.17157L15.8277 7.75736L12.9993 10.5858Z"></path>
            </svg>
          </button>
        </Numbers>
      </div>
    </div>
  );
};

export default App;
