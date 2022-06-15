import React from 'react';
import SubLayout from '../common/SubLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';
import Timetable from '../common/Timetable';

function Artist() {
	const path = process.env.PUBLIC_URL;
	const [artists, setArtists] = useState([]);
	const [onPopup, setOnPopup] = useState(false);
	const togglePop = () => {
		setOnPopup(true);
	};

	useEffect(() => {
		axios.get(`${path}/DB/artist.json`).then((json) => {
			setArtists(json.data.artist);
		});
	}, []);

	return (
		<>
			{onPopup && <Popup setOnPopup={setOnPopup} />}
			<SubLayout name={'Artist'} color={'#000'}>
				<article className='artist-list'>
					<ul>
						{artists.map((artist, idx) => {
							return <li key={idx}>{artist.name}</li>;
						})}
					</ul>
				</article>
				<article className='artist-thumb'>
					{artists.map((artist, idx) => {
						return (
							<div
								className='artist-card'
								key={idx}
								onClick={() => {
									setOnPopup(!onPopup);
								}}>
								<div className='img'>
									<img
										src={`${path}/img/artist/${artist.pic}`}
										alt={`${artist.name} photo`}
									/>
								</div>
								<div className='text'>
									<span>{artist.name}</span>
								</div>
							</div>
						);
					})}
				</article>
			</SubLayout>
			<Timetable />
		</>
	);
}

export default Artist;
