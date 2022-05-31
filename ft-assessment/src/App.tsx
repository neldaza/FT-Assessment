import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const covidURL = "https://disease.sh/v3/covid-19/states"


export default function App() {
  const [states, stateList] = useState(0)

  React.useEffect(() => {
    axios.get(covidURL).then((response) => {
      stateList(response.data);
    });
  }, []);

  if (!states) return null;

  console.log(states)

  return (
    <div>hi</div>
  );

  }
