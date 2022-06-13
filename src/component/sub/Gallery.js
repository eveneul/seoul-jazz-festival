import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SubLayout from '../common/SubLayout';

function Gallery() {
	const frame = useRef(null);

	const [Items, setItems] = useState([]);

	const key = 'c242a84b957d53602081a6a1c4adef5d';
	const method_interest = 'flickr.interestingness.getList';
	const num = 20;
	const url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${num}&nojsoncallback=1&format=json`;

	const getImg = async () => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});

		frame.current.classList.add('on');
	};

	useEffect(() => {
		getImg();
	}, []);

	return (
		<SubLayout name={'Gallery'}>
			<div ref={frame} className='galleryWrap'>
				{Items.map((item, idx) => {
					return (
						<article key={idx}>
							<div className='content'>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${item.id}/${item.id}_${item.secret}_b.jpg`}
										alt={item.title}
									/>
								</div>
								<div className='text'>
									<h3>{item.title}</h3>

									<span>{item.owner}</span>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</SubLayout>
	);
}

export default Gallery;
