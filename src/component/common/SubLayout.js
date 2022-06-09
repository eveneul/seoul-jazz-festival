import React from 'react';
import { useRef, useEffect } from 'react';

function SubLayout({ name, color, children }) {
	const frame = useRef(null);
	return (
		<>
			<section className={`content ${name}`} ref={frame}>
				<div className='title'>
					<h2 style={{ color: color }}>{name}</h2>
				</div>
				<div className='inner'>{children}</div>
			</section>
		</>
	);
}

export default SubLayout;
