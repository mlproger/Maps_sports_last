import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../../utils/axios.js'

const initialState = {
    reviews: [],
    len: 0,
    status:null,
    loading: false,
}



export const createReview = createAsyncThunk('reviews/create/:id', async({text, raithing, author, id_places}) => {
    try {
        const { data } = await axios.post('reviews/:id', {text, raithing, author, id_places})
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const getReview = createAsyncThunk('reviews/get/:id', async() => {
    try {
        const {reviews} = await axios.get(`reviews/:id`)
        return reviews
    } catch (error) {
        console.log(error)
    }
})


export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        send: () => initialState
    },
    extraReducers: { 
        [getReview.pending] : (state) => {
            state.loading = true
        },
        [getReview.fulfilled] : (state, action) => {
            state.reviews = action.payload.reviews
            state.loading = false
            state.len = action.payload.len
        },
        [getReview.rejected] : (state) => {
            state.loading = false
        },

        [createReview.pending] : (state) => {
            state.loading = true
        },
        [createReview.fulfilled] : (state, action) => {
            state.status = action.payload.message
            state.loading = false
        },
        [createReview.rejected] : (state) => {
            state.loading = false
        },
    }
})

export default reviewSlice.reducer
export const { send } = reviewSlice.actions
export const len = state => state.reviews.len

