import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import youtubeReducer from './redux/youtubeSlice';
import { configureStore } from '@reduxjs/toolkit';
import artistSlice from './redux/artistSlice';
import flickrSlice from './redux/flickrSlice';

const store = configureStore({
	reducer: {
		youtube: youtubeReducer,
		artist: artistSlice,
		flickr: flickrSlice,
	},
});

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
