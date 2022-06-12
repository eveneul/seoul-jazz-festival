import React from 'react';
import { useRef, useEffect, useState } from 'react';
import SubLayout from '../common/SubLayout';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const option = {
		center: new kakao.maps.LatLng(37.5188715541183, 127.12528957675329),
		level: 3,
	};

	const imageSrc = `${process.env.PUBLIC_URL}/img/location-marker.png`;
	const imageSize = new kakao.maps.Size(51, 67);
	const imageOption = { offset: new kakao.maps.Point(25, 67) };

	const markerPos = new kakao.maps.LatLng(37.5188715541183, 127.12528957675329);

	const markerImage = new kakao.maps.MarkerImage(
		imageSrc,
		imageSize,
		imageOption
	);

	const marker = new kakao.maps.Marker({
		position: markerPos,
		image: markerImage,
	});

	useEffect(() => {
		container.current.innerHTML = '';
		const SJFMap = new kakao.maps.Map(container.current, option);
		setLocation(SJFMap);
		marker.setMap(SJFMap);
	}, []);

	useEffect(() => {
		if (Location) {
			Traffic
				? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	}, [Traffic]);

	return (
		<SubLayout name={'Location'}>
			<div id='map' ref={container}></div>
			<button
				type='button'
				onClick={() => {
					setTraffic(!Traffic);
				}}>
				{Traffic ? '교통 정보 끄기' : '교통 정보 보기'}
			</button>
			<div className='map-info'>
				<ul>
					<li>
						교통 및 주차 문제로 공연장에 늦게 도착, 관람에 지장을 줄 수
						있습니다. 공연일의 혼잡이 예상되니 대중교통을 이용하여 주십시오.
						주차 요금은 올림픽공원의 규정에 따릅니다.
					</li>
					<li>
						대중교통
						<ul>
							<li>지하철: 5호선, 9호선 올림픽공원역 3번 출구, 4번 출구 이용</li>
							<li>
								버스
								<ul>
									<li>
										지선버스: 3214번, 3720번, 3319번, 3412번, 3216번, 340번
									</li>
									<li>간선버스: 6300번, 6006번, 6006-1번</li>
									<li>경기버스: 30번, 34번, 30-5번, 30-3번, 70번</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						승용차 이용
						<ul>
							<li>올림픽공원 현 주차 요금: 대형 12,000원/소형 10분당 600원</li>
							<li>
								공원 내 대형 행사가 개최될 경우 선불제로 전환 및 주차장 운영
								시간 탈력적으로 운영, 선불제 전환 시 소형 5,000원/대형 12,000원
								정액 징수
							</li>
						</ul>
					</li>
					<li>
						주차 문제로 공연장에 늦게 도착하시어 관람에 불편함이 발생하실 수
						있습니다. 버스, 지하철 등 대중교통을 적극 이용해 주시기 바랍니다.
					</li>
				</ul>
			</div>
		</SubLayout>
	);
}

export default Location;
