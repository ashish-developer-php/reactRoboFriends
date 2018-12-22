import React from 'react';
import Card from './Card';
import escapeRegExp from 'escape-string-regexp';


const CardList = props => {
	let filteredCardArray;
	const { query, robotsArray } = props;
	if(query){
			const match = new RegExp(escapeRegExp(query),'i')
			filteredCardArray = robotsArray.filter((robot) => match.test(robot.name))
	}
	else{
		filteredCardArray = robotsArray
	}

	return(
				<div>
		            {filteredCardArray.map((user,i) => {
		            return(
				           <Card 
					            key={i} 
					            id={user.id} 
					            name={user.name} 
					            email={user.email}
				            />
			              );
	           })}
		        </div>

		);

}

export default CardList;