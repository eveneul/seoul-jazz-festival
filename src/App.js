import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './component/common/Header';
import Footer from './component/common/Footer';

//main
import Visual from './component/main/Visual';
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
