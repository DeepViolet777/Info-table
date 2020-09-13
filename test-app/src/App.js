import React from 'react';
import './App.css';
import Start from "./components/Start";
import Table from "./components/Table";

class App extends React.Component{

  getData = async (event) => {
    event.preventDefault();
    const small_url = await fetch (`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%
    7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
    const big_url = await fetch (`http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7
    BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`);
    const small_data = await small_url.json();
    const big_data = await big_url.json();
    console.log(small_data, big_data);
    
  }

  render(){
    return(
      <div>
       <Start dataMethod={this.getData}/>
       <Table/>
      </div>
    );
  }
}

export default App;
