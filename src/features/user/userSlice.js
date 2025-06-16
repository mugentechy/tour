import { createSlice } from '@reduxjs/toolkit'
import { authUserAsync, getCurrentUserAsync,getSubscribeAsync,contactAsync } from './userActions'

const initialState = {
    error: null,
    user:null,
    currentUser:null,
    isLoading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
        builder
            .addCase(contactAsync.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(contactAsync.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
        
            })

            .addCase(contactAsync.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            })
            .addCase(getSubscribeAsync.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(getSubscribeAsync.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
                state.user = payload;
            })

            .addCase(getSubscribeAsync.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            })
            .addCase(authUserAsync.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(authUserAsync.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
                state.user = payload;
            })

            .addCase(authUserAsync.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            })
            .addCase(getCurrentUserAsync.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(getCurrentUserAsync.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
                state.currentUser = payload;
            })

            .addCase(getCurrentUserAsync.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            });
    },

});

export default userSlice.reducer;
