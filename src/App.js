import  { Component } from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-file/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'
//import { response } from 'express';


class App extends Component{
  constructor(){
    super();
    this.state={
      sadfucks:[],
      searchField: ''
      
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> this.setState({sadfucks : users}))

  }
    handleChange= (e)=>{
   this.setState({searchField: e.target.value})
  }
        //uporer jinishgula js promise
        //arrow function valomoto bujhte hobe
        //function e, => er ager jinish holo function er parameter
        //super() er jonno lifecycle method,render esob use kora jay
        //NICHER NAAM="YELLO!" TA PROP, EI VALUE TAI PARAMETER HISEBE USE HOBE
        //CARDLIST E JAI PARAMETER USE KORBO TAI HOLO PROP
      //CARDLIST ER MAJHER JINISHGULA HOCCHE CHILD PROP
      //onchange trigger hoy browser e kono kichu type korle
      //searchbox e ki type kortesi ta pawa jay e.target.value er maddhome
      //render er nicher line-destructuring kora hoise, etay state er property gua pull kore const set kora hoise, jate amader name,searchfield value na change hoye jay
render(){
  const { sadfucks,searchField }= this.state;
  const filteredSadfucks = sadfucks.filter(sadfuck => sadfuck.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="App">
    <h1>Wanted List</h1>
      <SearchBox 
      placeholder='search away'
      handleChange={this.handleChange}/>
      
      
 
      <CardList sadfucks={filteredSadfucks} />
    </div>
  );
}
}

  

export default App;
