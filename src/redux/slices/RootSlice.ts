import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: "Title",
        author: "Author",
        year_published: "Year",
        length: "Length",
        genre: "Genre",
        format: "Format",
        publisher: "Publisher"
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseYear: (state, action) => { state.year_published = action.payload },
        chooseLength: (state, action) => { state.length = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
        chooseFormat: (state, action) => { state.format = action.payload },
        choosePublisher: (state, action) => { state.publisher = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseYear, chooseLength, chooseGenre, chooseFormat, choosePublisher } = rootSlice.actions