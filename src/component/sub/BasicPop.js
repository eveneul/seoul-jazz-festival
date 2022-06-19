import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const BasicPop = forwardRef(({ children }, ref) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		open
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
	}, [open]);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<>
			{open && (
				<aside className='basicPop'>
					<div className='con'>
						{children}
						<span className='close' onClick={() => setOpen(false)}>
							close
						</span>
					</div>
				</aside>
			)}
		</>
	);
});

export default BasicPop;
