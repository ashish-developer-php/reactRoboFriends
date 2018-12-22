import React from 'react';

const SearchBox = props => {
	const { value, onClick } = props;
		return(
		<div className='pa2'>
			<input 
					className='pa3 ba b--green bg-lightest-blue'
					type='search'
					placeholder='search robos'
					value={value}
					onChange={(e) => onClick(e)}
			/>
		</div>
		);
	}
	
export default SearchBox;


