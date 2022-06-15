import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

function Visual() {
	return (
		<figure className='visual'>
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
			<div className='vid'>
				<div></div>
			</div>
			<div className='scroll-icon'>
				<FontAwesomeIcon icon={faArrowDownLong} />
			</div>
		</figure>
	);
}

export default Visual;
