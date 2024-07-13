import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favArray: [],
    bagArray : [],
    num: 0,
    MRP: 0,
    val: '',
    searchVal: '',
    isLoggedIn: false,
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        fav: (state, action) => {
            const exists = state.favArray.find(item => item.id === action.payload.id);
            if (!exists) {
                state.favArray.unshift(action.payload);   
            }
        },
        bag: (state, action) => {
            const exists = state.bagArray.find(item => item.id === action.payload.id)
            if (!exists){
                state.bagArray.unshift(action.payload)
            }       
        },
        numOfFav: (state) => {
            state.num = state.favArray.length
        },
        removeFav: (state, action) => {
            state.favArray = state.favArray.filter(item => item.id !== action.payload.id)
        },
        removeBag: (state, action) => {
            state.bagArray = state.bagArray.filter(item => item.id !== action.payload.id)
        },
        MRP: (state, action) => {
            state.MRP = action.payload
        },
        val: (state, action) => {
            state.val = action.payload
        },
        search: (state, action) => {
            state.searchVal = action.payload
        },
        loggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
        setEmail : (state,action)=>{
            state.email = action.payload
        }
    }
})

export default shopSlice.reducer
export const { fav, bag, numOfFav, removeFav, removeBag, MRP, val, search, loggedIn, setEmail} = shopSlice.actions