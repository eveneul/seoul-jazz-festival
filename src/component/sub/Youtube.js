import React from 'react';
import SubLayout from '../common/SubLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import YoutubePop from './YoutubePop';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const [idx, setIdx] = useState(0);

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
		<>
			<SubLayout name={'Youtube'} color={'#4e4e4e'}>
				<article className='mainVid'>
					<h3>[SJF ANNOUNCEMENT] 제14회 서울재즈페스티벌 2022 라인업 발표</h3>
					<iframe
						src='https://www.youtube.com/embed/5dk5m1kq_E8'
						frameborder='0'></iframe>
					<p>
						페스티벌의 꽃, 제14회 서울재즈페스티벌 2022의 라인업을 공개합니다!
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
				<YoutubePop setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[idx].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				</YoutubePop>
			)}
		</>
	);
}

export default Youtube;
