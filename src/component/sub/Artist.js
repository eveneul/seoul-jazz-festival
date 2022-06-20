import React from 'react';
import SubLayout from '../common/SubLayout';
import axios from 'axios';
import { useState } from 'react';
import Popup from '../common/Popup';
import Timetable from '../common/Timetable';
import { useSelector } from 'react-redux';

function Artist() {
	const Artist = useSelector((store) => store.artist.data);

	const path = process.env.PUBLIC_URL;
	const [onPopup, setOnPopup] = useState(false);
	const togglePop = () => {
		setOnPopup(true);
	};

	console.log(Artist);

	return (
		<>
			{onPopup && <Popup setOnPopup={setOnPopup} />}
			<SubLayout name={'Artist'} color={'#000'}>
				<article className='artist-list'>
					<ul>
						{Artist &&
							Artist.map((artist, idx) => {
								return <li key={idx}>{artist.name}</li>;
							})}
					</ul>
				</article>
				<article className='artist-thumb'>
					{Artist &&
						Artist.map((artist, idx) => {
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
