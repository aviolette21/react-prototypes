import React from 'react';
import Table from './table';

const students = [{
	student: 'Goku',
	course: 'fighting',
	grade: 100
}, {
	student: 'chichi',
	course: 'nagging',
	grade: 100
}, {
	student: 'gohan',
	course: 'saiyan',
	grade: 100
}];

export default () => {
	return (
		<div className="container">
				<h1>Student Grade Table</h1>
				<Table data={students}/>
		</div>
	)
}

