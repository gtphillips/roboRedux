import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

//send in the functions controlling our actions
const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField , onSearchChange, robots, isPending } = this.props;
		const fliteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
		<h1 className="tc">Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={fliteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);	
	}	
}
//this subscribes App to the redux store --> checking for changes in state
//This syntax means conenct is a higher order function. It runs connect then app after
export default connect(mapStateToProps, mapDispatchToProps)(App);