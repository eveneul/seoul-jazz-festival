import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import BasicPop from '../sub/Youtube';

function Vid({ scroll, start, base }) {
	const Vids = useSelector((store) => store.youtube.data);
	const [idx, setIdx] = useState(0);
	const [open, setOpen] = useState(false);
	const pop = useRef(null);
	let position = 0;
	if (start) position = scroll - start - base;

	return (
		<>
			<figure className='Vid mainSelection'>
				<h3 style={{ left: 100 + position }}>seoul jazz festival</h3>
				<span style={{ right: 100 + position }}>Fri, May 27 - Sun, May 29</span>
				<div className='inner'>
					{Vids.map((vid, idx) => {
						if (idx < 4) {
							return (
								<article key={idx}>
									<div
										className='pic'
										onClick={() => {
											setIdx(idx);
											pop.current.open();
										}}>
										<img
											src={vid.snippet.thumbnails.standard.url}
											alt={vid.snippet.title}
										/>
									</div>
								</article>
							);
						}
					})}
				</div>
			</figure>
		</>
	);
}

export default Vid;
