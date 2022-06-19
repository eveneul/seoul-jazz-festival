import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchYoutube = createAsyncThunk(
	'youtube/requestYoutube',
	async () => {
		const key = 'AIzaSyB7x1LAoidfLll4QFRLADxWagGsvelBXRs';
		const playlist = 'PLUzA4Nj5MAHGeFBwh55iK7V4hY9aDp6ds';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		const response = await axios.get(url);
		return response.data.items;
	}
);

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchYoutube.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default youtubeSlice.reducer;

/*		const key = 'AIzaSyB7x1LAoidfLll4QFRLADxWagGsvelBXRs';
		const VidPlaylist = 'PLUzA4Nj5MAHGeFBwh55iK7V4hY9aDp6ds';
		const VidNum = 6;
		const VidUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${VidPlaylist}&maxResults=${VidNum}`; */
