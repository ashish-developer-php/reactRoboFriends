import React,{ Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			robots: [],
			input: '',
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(user => this.setState({robots : user}));
	}

	handleInput = e => {
		this.setState({ input : e.target.value });
	}
	

	render(){
		return(
		<div className="tc">
		   <h1 className='f1'>Robo Friends</h1>
		   <SearchBox onClick={this.handleInput} value={this.state.input}/>
		   <Scroll>
		   <CardList query={this.state.input} robotsArray={this.state.robots}/>
		   </Scroll>
		 </div>
		);
	}
	
}

