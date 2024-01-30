import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    data:[],
    Coments:[],
    error:""
}
const userSlice = createSlice({
    name:"video",
    initialState:initialState,
    reducers:{
        getloading(state){
            state.loading=true;
        },
        getdata(state, action){
            state.loading=false;
            state.data=action.payload
           // state.channel=action.payload
        },
        getcoments(state, action){
            // state.loading=false;
            state.channel=action.payload
        },
        geterror(state){
            state.loading=false;
             state.error="error"
        }
    }
})

export const {getloading, getdata, geterror, getcoments} = userSlice.actions;

//const API = process.env.API2
const API = "AIzaSyAvQ5O4FWAmdGZeVSi-58-2jJf8L4jnz5E"
export function apiData(){
    return async (dispatch)=>{
        dispatch(getloading);
        try{
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=75&regionCode=IN&key=${API}`);
            const post =res.data.items

           dispatch(getdata(post))
            // console.log("post", post)
        }
        catch(error){
            dispatch(geterror(error.message))
        }
    }
}
//  function channeldata(videos){
//     return async (dispatch)=>{
//         try{
//             const channel = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${videos}&key=${API}`)

//             const post2 = channel.data.items
//             dispatch(getchannel(post2))
//              console.log("post2", post2)
//         }
//         catch(error){
//            console.log(error.message)
//         }
//     }
// }

export default userSlice.reducer