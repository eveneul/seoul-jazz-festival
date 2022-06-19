import SubLayout from '../common/SubLayout';
import { useState, useRef } from 'react';
import BasicPop from './BasicPop';
import { useSelector } from 'react-redux';

function Youtube() {
	const Vids = useSelector((store) => store.youtube.data);
	const [idx, setIdx] = useState(0);
	const pop = useRef(null);

	const handlePop = (index) => {
		pop.current.open();
		setIdx(index);
	};

	return (
		<>
			<SubLayout name={'Youtube'} color={'#4e4e4e'}>
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					return (
						<>
							<article className='vids' key={idx}>
								<h4>{tit.length > 40 ? tit.substr(0, 40) + '...' : tit}</h4>
								<div
									className='pic'
									onClick={() => {
										handlePop(idx);
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

			<BasicPop ref={pop}>
				<>
					{Vids.length > 0 && (
						<iframe
							src={`https://www.youtube.com/embed/${Vids[idx].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
					)}
				</>
			</BasicPop>
		</>
	);
}

export default Youtube;
