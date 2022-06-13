import React from 'react';
import SubLayout from '../common/SubLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicPop from './BasicPop';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [mainVid, setMainVid] = useState([]);
	const [open, setOpen] = useState(false);
	const [idx, setIdx] = useState(0);

	const subYoutube = () => {
		const key = 'AIzaSyB7x1LAoidfLll4QFRLADxWagGsvelBXRs';
		const subVidPlaylist = 'PLUzA4Nj5MAHGeFBwh55iK7V4hY9aDp6ds';
		const subVidNum = 6;
		const subVidUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${subVidPlaylist}&maxResults=${subVidNum}`;

		axios.get(subVidUrl).then((json) => {
			setVids(json.data.items);
		});
	};

	const mainYoutube = () => {
		const key = 'AIzaSyB7x1LAoidfLll4QFRLADxWagGsvelBXRs';
		const mainVidPlaylist = 'PLUzA4Nj5MAHHx6PnFC0k3JInIoqpRljWf';
		const mainVidNum = 1;
		const mainVidUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${mainVidPlaylist}&maxResults=${mainVidNum}`;

		axios.get(mainVidUrl).then((json) => {
			setMainVid(json.data.items);
		});
	};

	useEffect(subYoutube, []);
	useEffect(mainYoutube, []);

	return (
		<>
			<SubLayout name={'Youtube'} color={'#4e4e4e'}>
				{/* <article className='mainVid'>
					<h3>{mainVid[0].snippet.title}</h3>
					<img
						src={mainVid[0].snippet.thumbnails.standard.url}
						alt={mainVid[0].snippet.title}
					/>
					<p>{mainVid[0].snippet.description}</p>
				</article> */}
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					return (
						<>
							<article className='subVid' key={idx}>
								<h4>{tit.length > 40 ? tit.substr(0, 40) + '...' : tit}</h4>
								<div
									className='pic'
									onClick={() => {
										setOpen(true);
										setIdx(idx);
									}}>
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

			{open && (
				<BasicPop setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[idx].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				</BasicPop>
			)}
		</>
	);
}

export default Youtube;
