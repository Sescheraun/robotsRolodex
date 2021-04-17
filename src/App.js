import React, {Component} from 'react';

import {CardList} from './componants/card-ist/card-list.componant';
import {SearchBox} from './componants/search-box/search-box.componant';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
      , searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  rollDice = (dice, sides) => {
    let rolls = [dice];
    let die = 0;
    let roll = 0;
    let output = "rolling " + dice + "d" + sides;
    console.log(output);
    for(die=0; die<dice; die++) {
      rolls[die] = (Math.floor(Math.random() * sides)+1);
      roll += rolls[die];
    }
    console.log(roll, rolls)
  }

  handleChange = (e) => { 
    this.setState({searchField: e.target.value}) 
  }

  render() {

    this.rollDice(3,6)

    const {monsters, searchField} = this.state;
  
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase() )
      )
  
    return(
      <div className = 'App'>
      <h1> Robots Rolodex </h1>

      <SearchBox
          placeholder = 'Search Robots'
          handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
        
      </div>
    );
    
  }
}


export default App;
