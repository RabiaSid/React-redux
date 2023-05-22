import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

const initialState =[
    { is: '1', title: 'Learning Redux Toolkit', content: "helowwwwwwwww"},
    { is: '1', title: 'Starting Redux Toolkit', content: "helowwwwwwwww"},
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state, action){
            state.push(action.payload)
        }
    }
    // reducers:{
    //     postAdded: {
    //         reducer(state, action){
    //             state.push(action.payload)
    //         },
    //         prepare(title, content) {
    //             return{
    //                 payload:{
    //                     id : nanoid(),
    //                     title,
    //                     content
    //                 }
    //             }
    //         }
    //     }
    // }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer