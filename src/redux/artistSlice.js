import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArtist = createAsyncThunk(
	'artist/requestArtist',
	async () => {
		const url = `${process.env.PUBLIC_URL}/DB/artist.json`;
		const response = await axios.get(url);
		return response.data.artist;
	}
);

const artistSlice = createSlice({
	name: 'artist',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchArtist.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchArtist.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[fetchArtist.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default artistSlice.reducer;
