import React from 'react';
import { useRef, useEffect } from 'react';

function SubLayout({ name, children }) {
	const frame = useRef(null);
	return (
		<>
			<section className={`content ${name}`} ref={frame}>
				<div className='title'>
					<h2>{name}</h2>
				</div>
				<div className='inner'>{children}</div>
			</section>
		</>
	);
}

export default SubLayout;
