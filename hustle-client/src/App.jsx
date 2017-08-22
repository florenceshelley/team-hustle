

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			catArr: ["Test1", "Test2", "Test3"]
		}

    this.handleBranchChange = this.handleBranchChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleBranchChange(event) {
		console.log("branchChange");
	}

	handleFilterChange(event) {
		console.log("filterChange");
	}

	render() {

		let categoryArr = this.state.catArr.map((a, i) => {
			return <div key={i} >{a} </div>
		});
    return (
    <div className="App">
        <div className="App-header">   
	        <Icon type="ibm" className="App-logo"/>

	        <div className="Selectors">
		        <select className="Selectors-branch" onChange={this.handleBranchChange}>
		          <option>Againcourt</option>
		          <option>Bloor Gladstone</option>
		          <option>Parkdale</option>
		          <option>Fort York</option>
		        </select>

		        <select className="Selectors-filter" onChange={this.handleFilterChange}>
		          <option>Category</option>
		          <option>Keyword</option>
		          <option>Sentiment</option>
		        </select>
        	</div>

        
        </div>
        <div className="Word_Map">
        	{categoryArr}
        </div>
      </div>
    );
  }
}

export default App;