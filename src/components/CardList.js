import React from 'react';
import Card from './Card';
import escapeRegExp from 'escape-string-regexp';


const CardList = props => {
	let filteredCardArray 
	if(props.query){
			const match = new RegExp(escapeRegExp(props.query),'i')
			filteredCardArray = props.robotsArray.filter((robot) => match.test(robot.name))
	}
	else{
		filteredCardArray = props.robotsArray
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