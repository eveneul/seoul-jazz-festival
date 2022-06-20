import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

//main
import Main from './component/main/Main';
//sub
import Artist from './component/sub/Artist';
import Location from './component/sub/Location';
import Gallery from './component/sub/Gallery';
import Join from './component/sub/Join';
import Notice from './component/sub/Notice';
import Youtube from './component/sub/Youtube';

import { fetchYoutube } from './redux/youtubeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchArtist } from './redux/artistSlice';
import { fetchFlickr } from './redux/flickrSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchArtist());
		dispatch(fetchFlickr());
	}, []);
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main}></Route>
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/artist' component={Artist} />
			<Route path='/location' component={Location} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/join' component={Join} />
			<Route path='/notice' component={Notice} />
			<Route path='/youtube' component={Youtube} />

			<Footer />
		</>
	);
}

export default App;
