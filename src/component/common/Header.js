import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';

function Header({ type }) {
	const [MenuBtn, setMenuBtn] = useState(false);
	const onMenu = () => {
		setMenuBtn(!MenuBtn);
	};
	return (
		<>
			{MenuBtn ? <Menu onMenu={onMenu} /> : null}
			<header className={type}>
				<div className='inner'>
					<h1>
						<Link to='/'>
							<img
								src={`${process.env.PUBLIC_URL}/img/logo-white.png`}
								alt='Seoul jazz festival Logo'
							/>
						</Link>
					</h1>

					<Link
						to='/'
						className='menuBtn'
						onClick={() => {
							onMenu();
						}}>
						<span>매뉴 호출 버튼</span>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
