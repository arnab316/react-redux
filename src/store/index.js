import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  }
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer
  }
});

export { store };
export const { addSong } = songSlice.actions;
// console.log(songSlice.actions.addSong());

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songSlice.actions.addSong("some Song"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
