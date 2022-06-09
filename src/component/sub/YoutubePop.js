import React, { useEffect } from 'react';

function YoutubePop({ children, setOpen }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			<div className='youtubePop'>
				<div className='con'>
					{children}
					<span className='close' onClick={() => setOpen(false)}>
						close
					</span>
				</div>
			</div>
		</>
	);
}

export default YoutubePop;
