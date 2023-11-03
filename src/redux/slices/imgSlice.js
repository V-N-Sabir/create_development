import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    loadImg: false,
}

const imgSlice = createSlice({
    name: 'img',
    initialState,
    reducers: { 
         ImageLoaderEditState(state){
                state.loadImg = true    
                console.log(" state.loadImg",  state.loadImg);     
        },
      
      
}})

export const ImgLoading = (state) => state.img

export const {  ImageLoaderEditState, } = imgSlice.actions

export default imgSlice.reducer 