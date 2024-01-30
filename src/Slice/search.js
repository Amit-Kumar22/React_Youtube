import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState ={
    videoData:[],
    recom:[]
}
const searchSlice=createSlice({
    name:"Search",
    initialState:initialState,
    reducers:{
        getVideoData(state, action){
            state.videoData=action.payload
        },
        getRecom(state, action){
            state.recom = action.payload
        }
    }
})

export const {getVideoData,getRecom} = searchSlice.actions;

const API = "AIzaSyAvQ5O4FWAmdGZeVSi-58-2jJf8L4jnz5E"
console.log(API)
export function getSearch(text){
    return async (dispatch)=>{
        
        try{
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${text}&type=video&key=${API}`);
            const post =res.data.items
            dispatch(getVideoData(post))
            
        }
        catch(error){
            //dispatch(geterror(error.message))
            console.log(error.message)
        }
    }
}

// export function getmore(text){
//     return async (dispatch)=>{
        
//         try{
//             const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${text}&type=video&key=${API}`);
//             const post =res.data.items
//             dispatch(getRecom(post))
            
//         }
//         catch(error){
//             //dispatch(geterror(error.message))
//             console.log(error.message)
//         }
//     }
// }


export default searchSlice.reducer