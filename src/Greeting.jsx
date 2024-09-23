import { useState } from 'react';

function List(props) {
	if (!props.animals) {
		return <div>Loading...</div>
	}

	if (props.animals.length === 0) {
		return <div>There are no animals in the list!</div>
	}

	return (
		<ul>
			{props.animals.map((animal) => {
				return <li key={animal}>{animal}</li>
			})}
		</ul>
	)
}

export function Greeting() {
	const animals = ["Lion", "Cow", "Snake", "Lizard"];

	return (
		<div>
			<h1>Animals: </h1>
			<List animals={animals} />
		</div>
	)
}

export function Person() {
  const [person, setPerson] = useState({ firstName: "First", lastName: "Last", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

	const changeFirstName = (val) => {
    setPerson({ ...person, firstName: val });
  };

	const changeLastName = (val) => {
    setPerson({ ...person, lastName: val });
  };

  return (
    <>
      <h1>{`${person.firstName} ${person.lastName}`}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
			<h3>First name</h3>
			<input
				type="text"
				value={person.firstName}
				onChange={(event) => changeFirstName(event.target.value)}
			/>
			<h3>Last name</h3>
			<input
				type="text"
				value={person.lastName}
				onChange={(event) => changeLastName(event.target.value)}
			/>
    </>
  );
}
