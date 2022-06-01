import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const covidURL = "https://disease.sh/v3/covid-19/states"


export default function App() {
  const [states, stateList] = useState<any>(0)
  const [currentStateId, newCurrentStateId] = useState<any>(1)


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const target = event.currentTarget.id;
    if (currentStateId === target) {
        newCurrentStateId(null)
      } else {
        newCurrentStateId(target);
      }
    }



  useEffect(() => {
    axios.get(covidURL).then((response) => {
      stateList(response.data);
    });
  });

  if (!states) { return null }

  return (
    <div className='accordion'>
      {states.map((state: any) => {
        return (
          <React.Fragment key={state.state}>
            <h3 className='state' id={state.state} onClick={handleClick}>{state.state}</h3>
            <p className={currentStateId === state.state ? '' : 'hidden'}>
              {state.cases}
            </p>
          </React.Fragment>
        )
      })}
    </div>
  );

  }
