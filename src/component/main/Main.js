import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Header from '../common/Header';
import Pic from './Pic';
import Vid from './Vid';
import Visual from './Visual';

function Main() {
	const main = useRef(null);
	const position = useRef([]);
	const [idx, setIdx] = useState(0);
	const [scroll, setScroll] = useState(0);
	const base = -200;
	let sections;

	const getPosition = () => {
		position.current = [];
		sections = main.current.querySelectorAll('.mainSelection');
		for (let section of sections) {
			position.current.push(section.offsetTop);
		}
	};

	const scrollActive = () => {
		const scroll = window.scrollY;
		setScroll(scroll);

		position.current.map((pos, idx) => {
			if (scroll >= pos - 400) {
				sections[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPosition();

		window.addEventListener('resize', getPosition);
		window.addEventListener('scroll', scrollActive);
		return () => {
			window.addEventListener('resize', getPosition);
			window.addEventListener('scroll', scrollActive);
		};
	}, []);

	return (
		<main ref={main}>
			<Header />
			<Visual />
			<Vid scroll={scroll} start={position.current[1]} base={base} />
			<Pic />
		</main>
	);
}

export default Main;
