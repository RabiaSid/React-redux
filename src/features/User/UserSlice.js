import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    { id: '1', name: 'Rabia'},
    { id: '1', name: 'Ahzar'},
    { id: '1', name: 'Siddique'},
]

const UserSlice = createSlice({
    name:'users',
    initialState,
    reducers:{} 
}) 

export const selectAllUsers = (state) => state.users;


export default UserSlice.reducer