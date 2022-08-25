import React, { useEffect, useState } from 'react';
import Characters from './Characters';
import NavPage from './NavPage';

const CharactersList = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
			const data = await response.json();
			setCharacters(data.results);
			setLoading(false);
		}

		fetchData();
	}, [page]);
	return (
		<div className='container'>
			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<h2>loading...</h2>
			) : (
				<div className='row'>
					{characters.map((character) => {
						return (
							<div className='col-md-4' key={character.id}>
								<Characters character={character} />
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CharactersList;
