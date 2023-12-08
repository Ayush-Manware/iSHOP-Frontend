import {configureStore} from '@reduxjs/toolkit'
// import Slice from './Slice/reduxSlice'
// import reduxSlice from './Slice'
import Slice from './Slice'

const reduxStore = configureStore({
    reducer:{
        cartName : Slice
    }
})

export default reduxStore