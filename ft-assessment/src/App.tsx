import React from 'react';
import './App.css';

interface StateList {

}

export default class App extends React.Component <{}, {stateList: Array<object>}> {
  constructor(props: any){
    super(props);
    this.state = {stateList: []}}
  }
