import { configureStore  } from '@reduxjs/toolkit'
import listings from './features/listings/listingsSlice'
import listing from './features/listing/listingSlice'
import reservations from './features/reservation/reservationSlice'


const store = configureStore({
  reducer: {

    listings,
    listing,
    reservations
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store