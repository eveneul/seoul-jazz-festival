import React from 'react';
import SubLayout from '../common/SubLayout';
import Community from '../common/Community';

function Notice() {
	return (
		<SubLayout name={'Notice'} color={'#ff6666'}>
			<article className='reservation'>
				<div className='notice-title'>
					<h3>예매</h3>
				</div>
				<div className='list'>
					<ul>
						<li>
							<p>티켓을 구매하려면 어떻게 해야 하나요?</p>
							<span>+</span>
						</li>
						<li>
							<p>예매한 티켓을 받으려면 어떻게 해야 하나요?</p>
							<span>+</span>
						</li>
						<li>
							<p>유아 입장이 가능한가요?</p>
							<span>+</span>
						</li>
					</ul>
				</div>
			</article>
			<article className='watch'>
				<div className='notice-title'>
					<h3>관람</h3>
				</div>
				<div className='list'>
					<ul>
						<li>
							<p>돗자리를 사용할 수 있나요?</p>
							<span>+</span>
						</li>
						<li>
							<p>반입 가능한 물품과 불가능한 물품이 궁금합니다.</p>
							<span>+</span>
						</li>
						<li>
							<p>공연 시간이 어떻게 되나요?</p>
							<span>+</span>
						</li>
					</ul>
				</div>
			</article>
			<article className='etc'>
				<div className='notice-title'>
					<h3>기타</h3>
				</div>
				<div className='list'>
					<ul>
						<li>
							<p>우천시에도 공연이 진행되나요?</p>
							<span>+</span>
						</li>
						<li>
							<p>물품을 잃어버렸어요.</p>
							<span>+</span>
						</li>
						<li>
							<p>공연장 내에 식음료를 판매하나요?</p>
							<span>+</span>
						</li>
					</ul>
				</div>
			</article>
			<Community />
		</SubLayout>
	);
}

export default Notice;
