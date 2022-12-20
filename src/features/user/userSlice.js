import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        value: "[undeclared]",
    },
    reducers: {
        selectUser: (state, action)=> {
            state.value = action.payload
        },
        removeUser: (state) => {
            state.value = null;
        },
    }
})

export const {selectUser, removeUser} = userSlice.actions;

export default userSlice.reducer