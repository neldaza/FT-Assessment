import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"

const covidURL = "https://disease.sh/v3/covid-19/states"


export default function App() {
  const [states, stateList] = useState<any>(0)
  const [currentStateId, newCurrentStateId] = useState<any>(1)


  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const targetId = Number((event.target as HTMLElement).id);
    if ((event.target as HTMLElement).className === 'state') {
      if (currentStateId === targetId) {
        newCurrentStateId(null)
      } else {
        newCurrentStateId(targetId);
      }
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
            <div>{state.state}</div>
          </React.Fragment>
        )
      })}
    </div>
  );

  }
