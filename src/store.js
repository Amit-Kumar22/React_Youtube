import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/slice"
import searchSlice from "./Slice/search"

const store = configureStore({
    reducer:{
        videos:userSlice,
        Search:searchSlice
    }
})

export default store