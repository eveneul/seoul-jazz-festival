import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Visual() {
	const path = process.env.PUBLIC_URL;
	const Artist = useSelector((store) => store.artist.data);

	return (
		<figure className='visual mainSelection'>
			<div className='text'>
				<div className='title'>
					<h2>
						seoul <br /> jazz <br /> festival
					</h2>
				</div>
				<div className='sub-title'>
					<span>Fri, May 27 - Sun, May 29</span>
					<span>88 Garden Olympic Park</span>
				</div>
			</div>
			<div className='headliner'>
				{Artist.map((el, idx) => {
					if (idx < 6) {
						return (
							<>
								<article className='artist' key={idx}>
									<div className='img'>
										<img
											src={`${path}/img/artist/${el.pic}`}
											alt={`${el.name} photo`}
										/>
									</div>
									<div className='content'>
										<span>{el.name}</span>
									</div>
								</article>
							</>
						);
					}
				})}
			</div>
			<div className='vid'>
				<div className='content'>
					<video
						src={`${process.env.PUBLIC_URL}/vid/mainVid.mp4`}
						muted
						autoPlay
						loop></video>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
