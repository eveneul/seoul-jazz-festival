import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SubLayout from '../common/SubLayout';
import Masonry from 'react-masonry-component';

function Gallery() {
	const frame = useRef(null);
	const userId = '195703740@N02';

	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);

	const key = 'c242a84b957d53602081a6a1c4adef5d';
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const num = 50;
	const interest_url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${num}&nojsoncallback=1&format=json`;

	const search_url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${num}&nojsoncallback=1&format=json&tags=jazzfestival`;

	const getImg = async (url) => {
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		getImg(search_url);
	}, []);

	return (
		<SubLayout name={'Gallery'}>
			{Loading && (
				<img
					src={`${process.env.PUBLIC_URL}/img/loading.gif`}
					className='loading'
				/>
			)}
			<div ref={frame} className='galleryWrap'>
				<Masonry>
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
				</Masonry>
			</div>
		</SubLayout>
	);
}

export default Gallery;
