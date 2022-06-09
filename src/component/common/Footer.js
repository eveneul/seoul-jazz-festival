import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<ul>
					<li>
						<Link to='/'>개인정보처리방침</Link>
					</li>
					<li>
						<Link to='/'>이용약관</Link>
					</li>
					<li>
						<Link to='/'>이메일무단수집거부</Link>
					</li>
					<li>
						<Link to='/'>고객센터</Link>
					</li>
					<li>
						<Link to='/'>사이트맵</Link>
					</li>
				</ul>
				<div className='footer-info'>
					<address>주소: 서울특별시 송파구 올림픽로 35가길 B-310</address>
					<p>대표자: 김지연</p>
					<p>대표전화: 02-563-0595</p>
					<p>사업자등록번호: 120-86-73908</p>
				</div>
				<span>
					Copyright &copy; 2007 SeoulJazzFestival. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}

export default Footer;
