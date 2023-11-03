import { configureStore } from '@reduxjs/toolkit'
import img from './slices/imgSlice'

export const store = configureStore({
    reducer: {
        img, 
    },
})


//export type RootState = ReturnType<typeof store.getState>



//export type AppDispatch = typeof store.dispatch
//export const useAppDispatch: () => AppDispatch = useDispatch 