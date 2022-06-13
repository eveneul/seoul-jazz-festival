import React, { useEffect } from 'react';

function BasicPop({ children, setOpen }) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<>
			<div className='basicPop'>
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

export default BasicPop;
