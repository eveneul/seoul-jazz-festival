import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SubLayout from '../common/SubLayout';
import Masonry from 'react-masonry-component';
import BasicPop from './BasicPop';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);

	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [Open, setOpen] = useState(false);
	const [Idx, setIdx] = useState(0);

	const getImg = async (opt) => {
		const key = 'c242a84b957d53602081a6a1c4adef5d';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		let url = '';

		if (opt.type === 'begin') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
		}

		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
		}, 1000);
	};

	const searchImg = () => {
		const result = input.current.value.trim();
		input.current.value = '';
		setLoading(true);
		frame.current.classList.remove('on');
		getImg({
			type: 'search',
			count: 20,
			tags: result,
		});
	};

	useEffect(() => {
		getImg({
			type: 'begin',
			count: 20,
			user: '195703740@N02',
		});
	}, []);

	return (
		<>
			<SubLayout name={'Gallery'}>
				{Loading && (
					<img
						src={`${process.env.PUBLIC_URL}/img/loading.gif`}
						className='loading'
					/>
				)}

				<div ref={frame} className='galleryWrap'>
					<div className='search-box'>
						<input
							type='text'
							ref={input}
							placeholder='검색어를 입력하세요'
							onKeyUp={(e) => {
								if (e.key === 'Enter') {
									searchImg();
								}
							}}
						/>
						<button onClick={searchImg}>SEARCH</button>
					</div>
					<Masonry>
						{Items.map((item, idx) => {
							return (
								<article
									key={idx}
									onClick={() => {
										setOpen(true);
										setIdx(idx);
									}}>
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
			{Open && (
				<BasicPop setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Items[Idx].server}/${Items[Idx].id}_${Items[Idx].secret}_b.jpg`}
						alt={Items[Idx].title}
					/>
				</BasicPop>
			)}
		</>
	);
}

export default Gallery;
