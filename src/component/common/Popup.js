import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebook,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Popup({ setOnPopup }) {
	const path = process.env.PUBLIC_URL;
	const [ArtArr, setArtArr] = useState([]);
	const [ClosePop, setClosePop] = useState(false);

	useEffect(() => {
		axios.get(`${path}/DB/artist.json`).then((json) => {
			setArtArr(json.data.artist);
		});
	}, []);

	return (
		<>
			<figure className='pop'>
				<article>
					<img src={`${path}/img/artist/honne.jpg`} />
					<div className='text'>
						<h3>HONNE</h3>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</span>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
							architecto.
						</p>
						<ul className='artist-sns'>
							<li>
								<Link to='/'>
									<FontAwesomeIcon icon={faInstagram} />
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FontAwesomeIcon icon={faFacebook} />
								</Link>
							</li>
							<li>
								<Link to='/'>
									<FontAwesomeIcon icon={faYoutube} />
								</Link>
							</li>
						</ul>
					</div>

					<div
						className='popCloseBtn'
						onClick={() => {
							setOnPopup(false);
						}}>
						<span>close</span>
					</div>
				</article>
			</figure>
		</>
	);
}

export default Popup;
