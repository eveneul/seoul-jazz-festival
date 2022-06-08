import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebook,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Menu({ onMenu }) {
	return (
		<>
			<div id='gnb'>
				<nav className='menu'>
					<ul>
						<li>
							<Link style={{ color: '#e8a2f8' }} to='/' onClick={onMenu}>
								Seoul Jazz Festival
							</Link>
						</li>
						<li>
							<NavLink to='/notice' onClick={onMenu}>
								Notice
							</NavLink>
						</li>
						<li>
							<NavLink to='/artist' onClick={onMenu}>
								Artist
							</NavLink>
						</li>
						<li>
							<NavLink to='/faq' onClick={onMenu}>
								Faq
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' onClick={onMenu}>
								Gallery
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' onClick={onMenu}>
								Youtube
							</NavLink>
						</li>
						<li>
							<NavLink to='/join' onClick={onMenu}>
								Join
							</NavLink>
						</li>
					</ul>
				</nav>

				<ul className='sns-list'>
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
				<Link to='/' className='closeBtn' onClick={onMenu}>
					<span>매뉴 닫기 버튼</span>
				</Link>
			</div>
		</>
	);
}

export default Menu;
