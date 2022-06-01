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
    <div className='container text-align-center'>
      <h1>COVID-19 Statistics State by State</h1>
      <div className='accordion'>
      {
        states.map((state: any, i: any) => {
            return(
              <React.Fragment key={state.state}>
                <div className='specific'>
                  <div className="main column state align-items-center justify-space-around" id={state.state} onClick={handleClick}>
                    <h3>{state.state}</h3>
                    <h4>Cases: {state.cases} </h4>
                    <div className={ `chevron ${currentStateId === state.state ? 'top' : 'bottom'}`}></div>
                  </div>
                </div>
                <div className={`state ${currentStateId === state.state ? '' : 'hidden'}`}>
                  <div className='specific-stats'>
                    <p>Cases Today: {state.todayCases}</p>
                    <p>Deaths Today: {state.todayDeaths}</p>
                    <p>Total Deaths: {state.deaths}</p>
                    <p>Active Cases: {state.active}</p>
                    <p>Cases per One Million: {state.casesPerOneMillion}</p>
                    <p>Deaths per One Million: {state.deathsPerOneMillion}</p>
                    <p>Tests per One Million: {state.testsPerOneMillion}</p>
                    <p>Total Tests Taken: {state.tests}</p>
                    <p>Population: {state.population}</p>
                  </div>
                </div>
              </React.Fragment>
            )
         })
      }
      </div>
    </div>
  );

}
