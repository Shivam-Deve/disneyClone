import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/user/userSlice";
const configStore = configureStore({
    reducer: {
        user:reducer
    }
})
export default configStore;