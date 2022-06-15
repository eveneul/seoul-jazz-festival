import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Headliner() {
	const path = process.env.PUBLIC_URL;
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/artist-visual.json`).then((json) => {
			console.log(json.data.artistMain);
			setArtists(json.data.artistMain);
		});
	}, []);

	return (
		<figure className='headliner'>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				{artists.map((artist, idx) => {
					return (
						<SwiperSlide key={idx}>
							<div className='img'>
								<img
									src={`${path}/img/artist-main/${artist.pic}`}
									alt={artist.name}
								/>
							</div>
							<div className='text'>
								<h2>{artist.name}</h2>
								<p> {artist.desc} </p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</figure>
	);
}

export default Headliner;
