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
							<svg
								version='1.0'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 461.000000 458.000000'
								preserveAspectRatio='xMidYMid meet'>
								<g
									transform='translate(0.000000,458.000000) scale(0.100000,-0.100000)'
									stroke='none'>
									<path
										d='M487 4566 c-3 -7 -29 -19 -59 -26 -72 -17 -174 -73 -226 -123 -44
-43 -122 -150 -122 -168 0 -5 -7 -23 -15 -39 -39 -76 -40 -273 -1 -385 8 -22
24 -74 36 -115 13 -41 28 -91 35 -110 7 -19 23 -69 35 -110 47 -159 53 -176
71 -225 11 -28 19 -59 19 -70 0 -11 7 -33 15 -48 8 -15 17 -45 21 -65 4 -20
13 -49 20 -64 8 -15 14 -37 14 -50 1 -13 9 -41 20 -63 11 -22 19 -50 20 -63 0
-13 6 -35 14 -50 7 -15 16 -44 20 -64 4 -20 13 -50 21 -65 8 -15 15 -38 15
-50 0 -12 6 -37 14 -55 14 -32 31 -87 76 -238 12 -41 26 -86 32 -100 6 -14 16
-47 24 -75 7 -27 20 -72 28 -100 9 -27 24 -79 35 -115 19 -64 30 -98 52 -162
6 -18 17 -55 24 -83 7 -27 18 -63 24 -80 15 -43 46 -142 63 -200 24 -82 60
-196 78 -255 10 -30 26 -82 35 -115 10 -33 25 -78 33 -100 8 -22 18 -56 22
-75 5 -19 13 -48 19 -65 31 -86 51 -174 51 -220 0 -56 -34 -180 -56 -206 -8
-8 -14 -20 -14 -26 0 -6 -20 -35 -45 -66 -69 -83 -157 -138 -263 -162 -117
-27 -199 -17 -319 42 -84 40 -179 134 -213 210 -33 75 -47 92 -70 86 -30 -8
-25 -48 17 -130 163 -324 631 -382 880 -110 96 106 143 224 143 363 0 78 -7
114 -50 244 -10 30 -28 89 -40 130 -12 41 -28 91 -35 110 -7 19 -18 55 -24 80
-19 69 -43 147 -76 245 -9 28 -20 66 -25 85 -9 35 -32 109 -51 165 -6 17 -14
46 -19 65 -4 19 -12 46 -18 60 -6 14 -20 59 -32 100 -13 41 -30 100 -40 130
-9 30 -28 89 -40 130 -13 41 -29 93 -36 115 -6 22 -22 74 -34 115 -13 41 -29
90 -36 108 -8 18 -14 40 -14 50 0 15 -16 67 -55 182 -39 115 -55 167 -55 182
0 10 -6 32 -14 50 -8 18 -24 67 -36 108 -12 41 -30 100 -40 130 -10 30 -28 89
-40 130 -12 41 -28 90 -36 108 -8 18 -14 43 -14 55 -1 12 -9 40 -20 62 -11 22
-19 50 -20 63 0 13 -5 33 -12 45 -6 12 -15 38 -19 57 -7 34 -29 104 -50 165
-12 33 -28 112 -33 160 -4 42 17 152 38 200 63 141 169 230 326 276 109 32
201 21 330 -38 69 -32 176 -140 208 -208 34 -73 37 -78 55 -89 12 -8 20 -7 31
4 13 13 14 20 1 55 -7 22 -26 63 -41 90 -38 68 -181 205 -213 205 -7 0 -22 6
-34 14 -12 8 -47 19 -77 26 -30 7 -59 19 -63 26 -11 20 -163 20 -170 0z'
									/>
									<path
										d='M1499 4553 c-8 -21 -7 -39 4 -73 8 -25 22 -72 32 -105 9 -33 26 -84
36 -113 10 -30 19 -61 19 -69 0 -8 6 -29 14 -46 8 -18 19 -50 24 -72 6 -22 15
-53 21 -70 6 -16 20 -64 32 -105 12 -41 27 -91 34 -110 7 -19 23 -69 35 -110
12 -41 28 -93 35 -115 12 -37 29 -94 77 -255 11 -36 26 -80 34 -98 8 -18 14
-39 14 -47 0 -8 9 -43 20 -77 25 -75 41 -128 70 -228 12 -41 28 -91 35 -110 7
-19 22 -66 33 -105 22 -72 55 -180 77 -250 7 -22 23 -74 35 -115 13 -41 31
-100 41 -130 9 -30 31 -102 49 -160 17 -58 40 -130 51 -161 10 -31 19 -63 19
-72 0 -9 6 -31 14 -49 8 -18 24 -67 36 -108 12 -41 28 -93 35 -115 7 -22 25
-80 40 -130 15 -49 33 -108 40 -130 18 -57 47 -151 89 -290 20 -66 42 -133 48
-150 78 -220 41 -405 -111 -547 -90 -85 -213 -138 -320 -138 -57 0 -170 26
-214 49 -79 41 -207 162 -207 195 0 8 -7 19 -15 26 -8 7 -15 23 -15 36 0 26
-42 60 -61 49 -36 -23 27 -162 115 -253 45 -47 120 -102 139 -102 7 0 22 -6
32 -14 25 -17 135 -45 197 -49 88 -6 223 30 328 88 53 29 137 125 173 197 38
76 67 190 66 261 0 41 -27 173 -47 232 -6 17 -15 46 -22 65 -7 19 -18 58 -25
86 -7 28 -17 59 -22 70 -6 10 -14 37 -18 59 -4 22 -11 45 -16 51 -5 6 -13 31
-18 55 -9 45 -19 76 -52 164 -11 28 -19 59 -19 70 0 11 -7 33 -15 48 -8 15
-17 45 -21 65 -4 20 -12 48 -19 62 -7 14 -16 44 -20 67 -4 24 -10 45 -15 48
-4 3 -11 22 -14 42 -4 21 -13 54 -20 73 -7 19 -23 69 -36 110 -13 41 -31 100
-40 130 -10 30 -28 89 -40 130 -12 41 -28 92 -36 113 -8 20 -14 45 -14 55 0 9
-7 30 -15 46 -8 15 -15 35 -15 42 0 8 -8 40 -19 71 -10 32 -28 92 -40 133 -12
41 -29 90 -37 108 -8 18 -14 41 -14 52 0 11 -6 34 -14 52 -8 18 -24 67 -36
108 -12 41 -30 102 -41 135 -10 33 -28 92 -40 130 -11 39 -27 85 -35 103 -8
18 -14 41 -14 51 0 11 -9 43 -19 73 -11 29 -36 107 -56 173 -20 66 -43 138
-50 160 -7 22 -23 74 -35 115 -12 41 -27 93 -35 115 -15 46 -47 150 -77 250
-11 39 -27 86 -34 105 -7 19 -16 51 -20 70 -8 41 -42 110 -55 110 -5 0 -14
-12 -20 -27z'
									/>
									<path
										d='M3764 4566 c-3 -8 -30 -20 -59 -26 -29 -6 -68 -19 -86 -28 -151 -79
-233 -172 -290 -332 -23 -66 -27 -238 -5 -297 7 -21 23 -72 35 -113 13 -41 27
-88 33 -105 5 -16 18 -59 29 -95 11 -36 26 -86 34 -112 8 -27 22 -69 30 -95 8
-27 23 -77 34 -113 11 -36 24 -78 29 -95 6 -16 20 -64 32 -105 13 -41 27 -86
33 -100 5 -14 13 -41 18 -60 4 -19 15 -57 24 -85 48 -142 67 -207 68 -239 2
-26 -3 -30 -63 -51 -36 -13 -99 -33 -140 -45 -41 -12 -93 -28 -115 -35 -22 -7
-74 -22 -115 -34 -41 -12 -88 -27 -105 -32 -16 -6 -52 -16 -80 -23 -56 -14
-108 -43 -102 -59 7 -23 36 -31 69 -20 18 6 67 21 108 33 41 12 89 26 105 32
39 13 146 45 210 62 49 14 84 25 148 48 17 6 51 12 75 12 l43 1 25 -75 c24
-73 43 -135 85 -275 11 -38 26 -81 31 -95 6 -14 14 -41 19 -60 7 -34 29 -104
50 -165 6 -16 15 -48 19 -70 5 -22 16 -53 24 -70 9 -16 16 -40 16 -52 0 -12 6
-37 14 -55 7 -18 23 -67 36 -108 12 -41 26 -88 32 -105 6 -16 16 -50 23 -75 8
-25 18 -58 23 -75 6 -16 20 -64 32 -105 13 -41 29 -90 36 -108 8 -18 14 -43
14 -55 0 -12 9 -42 20 -66 11 -24 20 -53 20 -65 0 -11 6 -33 14 -47 7 -14 16
-42 20 -62 4 -20 13 -49 21 -64 8 -15 15 -38 15 -51 0 -13 6 -35 14 -50 8 -15
18 -46 21 -67 4 -22 13 -51 20 -65 7 -14 17 -43 23 -65 6 -22 20 -71 32 -110
12 -38 24 -81 27 -95 7 -30 31 -60 49 -60 8 0 16 11 20 25 6 23 -3 59 -56 225
-17 55 -28 89 -70 230 -13 41 -28 91 -35 110 -7 19 -23 69 -35 110 -24 82 -43
145 -70 230 -9 30 -28 89 -40 130 -13 41 -29 93 -36 115 -7 22 -22 74 -34 115
-12 41 -28 91 -36 110 -7 19 -16 51 -20 70 -3 19 -13 47 -20 62 -8 15 -14 37
-14 48 0 12 -7 36 -15 53 -8 18 -19 50 -24 72 -9 38 -15 58 -42 138 -6 17 -16
50 -21 72 -6 22 -16 56 -23 75 -7 19 -23 67 -34 105 -51 169 -65 212 -78 245
-7 19 -14 53 -16 75 l-2 39 120 39 c66 21 152 48 190 59 39 12 99 30 135 40
36 11 80 26 98 34 18 8 41 14 51 14 10 0 47 11 82 24 47 17 65 29 67 44 5 32
-31 36 -111 12 -40 -12 -83 -27 -97 -32 -14 -6 -47 -16 -75 -23 -27 -7 -63
-18 -80 -23 -29 -10 -124 -39 -230 -70 -27 -8 -73 -23 -100 -33 -28 -10 -56
-19 -63 -19 -14 0 -47 69 -57 118 -4 18 -13 45 -21 60 -8 15 -14 37 -14 50 0
13 -6 35 -14 50 -7 15 -17 46 -21 69 -3 22 -13 49 -20 60 -8 10 -15 28 -15 40
0 11 -9 45 -19 75 -10 29 -27 80 -36 113 -9 33 -26 83 -36 110 -10 28 -19 59
-19 70 0 11 -7 33 -15 48 -8 15 -17 45 -21 65 -4 20 -13 49 -20 64 -8 15 -14
37 -14 50 0 13 -7 37 -16 53 -8 17 -19 48 -24 70 -4 22 -13 54 -19 70 -38 109
-51 168 -51 229 0 136 71 277 184 364 97 75 161 100 279 109 121 10 281 -58
367 -154 44 -49 53 -63 89 -140 30 -63 36 -68 65 -57 20 8 20 52 1 78 -8 11
-15 25 -15 32 0 14 -45 82 -87 131 -37 43 -132 113 -154 113 -9 0 -22 6 -28
14 -6 7 -38 19 -70 25 -34 7 -61 18 -65 26 -8 21 -164 22 -172 1z'
									/>
								</g>
							</svg>
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
