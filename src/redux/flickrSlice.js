import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk(
	'flickr/requestFlickr',
	async (opt) => {
		const key = 'c242a84b957d53602081a6a1c4adef5d';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		let url = '';

		if (opt.type === 'begin') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&user_id=${opt.user}`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&api_key=${key}&per_page=${opt.count}&nojsoncallback=1&format=json&tags=${opt.tags}`;
		}

		const response = await axios.get(url);
		return response.data.photos.photo;
	}
);

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchFlickr.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default flickrSlice.reducer;
