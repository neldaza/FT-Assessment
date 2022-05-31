import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const covidURL = "https://disease.sh/v3/covid-19/states"


export default function App() {
  const [states, stateList] = useState(0)
  const [currentState, newCurrentState] = useState<any>(1)

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = Number(event.target.getAttribute('id'));
    if (event.target.className === 'state') {
      if (currentState === targetId) {
        newCurrentState(null)
      } else {
        newCurrentState(targetId);
      }
    }
  }

  React.useEffect(() => {
    axios.get(covidURL).then((response) => {
      stateList(response.data);
    });
  }, []);

  if (!states) return null;

  return (
    <div></div>
  );

  }
