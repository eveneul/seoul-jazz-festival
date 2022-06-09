import React from 'react';
import SubLayout from './SubLayout';

function Timetable() {
	return (
		<>
			<SubLayout name={'TimeTable'}>
				<table>
					<caption className='sr-only'>서울재즈페스티벌 타임테이블</caption>
					<tbody>
						<tr>
							<th scope='col'>
								<strong>Fr</strong>
							</th>
							<th scope='col'>
								<strong>Sa</strong>
							</th>
							<th scope='col'>
								<strong>So</strong>
							</th>
						</tr>
						<tr>
							<td>
								<span>13:00</span>
								<p>Moonchild</p>
							</td>
							<td>
								<span>13:00</span>
								<p>고상지 With 홍진호, 조민규</p>
							</td>
							<td>
								<span>12:50</span>
								<p>Peter Cincotti</p>
							</td>
						</tr>
						<tr>
							<td>
								<span>14:50</span>
								<p>Etham</p>
							</td>
							<td>
								<span>14:55</span>
								<p>Johnny Stimson</p>
							</td>
							<td>
								<span>14:40</span>
								<p>선우정아</p>
							</td>
						</tr>
						<tr>
							<td>
								<span>16:40</span>
								<p>Johnny Stimson</p>
							</td>
							<td>
								<span>16:40</span>
								<p>AKMU</p>
							</td>
							<td>
								<span>16:30</span>
								<p>Prep</p>
							</td>
						</tr>
						<tr>
							<td>
								<span>18:35</span>
								<p>백예린</p>
							</td>
							<td>
								<span>18:30</span>
								<p>José James</p>
							</td>
							<td>
								<span>18:20</span>
								<p>에픽하이</p>
							</td>
						</tr>
						<tr>
							<td>
								<span>20:45</span>
								<p>Pink Sweat$</p>
							</td>
							<td>
								<span>20:40</span>
								<p>Alec Benjamin</p>
							</td>
							<td>
								<span>20:30</span>
								<p>HONNE</p>
							</td>
						</tr>
					</tbody>
				</table>
			</SubLayout>
		</>
	);
}

export default Timetable;
