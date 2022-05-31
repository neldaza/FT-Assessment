import React from 'react';
import './App.css';

interface stateList {
  stateList: Array<object>
}

export default class App extends React.Component <{}, stateList> {
  constructor(props: any){
    super(props);
    this.state = {stateList: []}
  }

  render(){
    return (
      <div>Hi</div>
    )
  }

  }
