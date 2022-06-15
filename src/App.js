import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

//main
import Visual from './component/main/Visual';
import Headliner from './component/main/Headliner';
import MainNotice from './component/main/MainNotice';
import Vid from './component/main/Vid';
import Pic from './component/main/Pic';
//sub
import Artist from './component/sub/Artist';
import Location from './component/sub/Location';
import Gallery from './component/sub/Gallery';
import Join from './component/sub/Join';
import Notice from './component/sub/Notice';
import Youtube from './component/sub/Youtube';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Headliner />
					<MainNotice />
					<Vid />
					<Pic />
				</Route>

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
