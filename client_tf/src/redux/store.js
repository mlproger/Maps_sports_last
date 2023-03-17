import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice.js'
import placesSlice from './features/places/placesSlice.js'
import reviewsSlice from './features/reviews/reviewsSlice.js'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        places: placesSlice,
        review: reviewsSlice
    },
})