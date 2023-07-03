import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  album: Array<object>;
  loading: boolean;
  error: string | undefined;
}

const initialState: CounterState = {
  album: [],
  loading: false,
  error: "",
};

export const searchAlbums = createAsyncThunk(
  "albumsSlice/fetchAlbums",
  async (query) => {
    const response = await axios.get(
      "https://spotify23.p.rapidapi.com/search/",
      {
        params: {
          q: query,
          type: "albums",
          offset: "0",
          limit: "12",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "37149707ebmsh7abd441c54bb7f1p147a1fjsn0aa037309cc2",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      }
    );
    return response.data.albums.items;
  }
);
export const albumsSlice = createSlice({
  name: "allAlbum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchAlbums.pending, (state) => {
        state.album = [];
        state.loading = true;
      })
      .addCase(searchAlbums.fulfilled, (state, action) => {
        state.album = action.payload;
        state.loading = false;
      })
      .addCase(searchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
// export const { addAlbum } = albumsSlice.actions;

export default albumsSlice.reducer;
