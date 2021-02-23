import {configureStore} from '@reduxjs/toolkit'

import carsReducer from './ducks/cars'
import layoutReducer from './ducks/layout'
import CartReducer from './ducks/cart'
import AuthReducer from './ducks/auth'


export default configureStore({
    reducer: {
        cars: carsReducer,
        layout: layoutReducer,
        cart: CartReducer,
        auth: AuthReducer
        
    }
})
