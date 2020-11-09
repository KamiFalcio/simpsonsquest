import { render } from '@testing-library/react';
import React from 'react';
import Simpson from './components/Simpson';
import axios from 'axios';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        simp: {},
      };
  };

  changeSimp = () => {
    axios.get("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.data)
    .then(data => {
      this.setState({simp: data[0],
      })
    });
  };

  render () {
    return (
      <div className="App">
        <h1>Appuie sur le bouton pour obtenir une phrase des Simpsons !</h1>
          <Simpson simp={this.state.simp}/>
          <button type="button" onClick={this.changeSimp}>SIMPSON</button>
      </div>
    );
  };
};

export default App;
