import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import BasicPop from '../sub/Youtube';

function Vid() {
	const Vids = useSelector((store) => store.youtube.data);
	const [idx, setIdx] = useState(0);
	const [open, setOpen] = useState(false);
	const pop = useRef(null);

	return (
		<>
			<figure className='Vid'>
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
									<div className='btn'>
										<span>Click!</span>
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
