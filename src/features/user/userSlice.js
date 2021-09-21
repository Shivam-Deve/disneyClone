import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "",
    email: "",
    dp: ""
};
const userSlice=createSlice({
    name: "user",
    initialState:initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.dp = action.payload.dp;
        },
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.dp = null;
        }
    }
})
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserDp = state => state.user.dp;
export default userSlice.reducer;