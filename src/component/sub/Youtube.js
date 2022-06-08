import React from 'react';
import SubLayout from '../common/SubLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	// const mainVidPlaylist = 'PLUzA4Nj5MAHHx6PnFC0k3JInIoqpRljWf';
	// const mainVidNum = 1;
	// const mainVidUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${mainVidPlaylist}&maxResults=${mainVidNum}`;

	const fetchYoutube = () => {
		const key = 'AIzaSyB7x1LAoidfLll4QFRLADxWagGsvelBXRs';
		const subVidPlaylist = 'PLUzA4Nj5MAHGeFBwh55iK7V4hY9aDp6ds';
		const subVidNum = 6;
		const subVidUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${subVidPlaylist}&maxResults=${subVidNum}`;

		axios.get(subVidUrl).then((json) => {
			console.log(json);
			setVids(json.data.items);
			console.log(json.data.items);
		});
	};

	useEffect(fetchYoutube, []);

	return (
		<SubLayout name={'Youtube'}>
			<article className='mainVid'>
				<h3>Lorem ipsum dolor sit amet.</h3>
				<div>메인 비디오수정중입니다..</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
					velit.
				</p>
			</article>
			{Vids.map((vid, idx) => {
				const tit = vid.snippet.title;
				const desc = vid.snippet.description;
				const date = vid.snippet.publishedAt;

				return (
					<>
						<article className='subVid' key={idx}>
							<h4>{tit.length > 40 ? tit.substr(0, 40) + '...' : tit}</h4>
							<div className='pic'>
								<img
									src={vid.snippet.thumbnails.standard.url}
									alt={vid.title}
								/>
							</div>
						</article>
					</>
				);
			})}
		</SubLayout>
	);
}

export default Youtube;
