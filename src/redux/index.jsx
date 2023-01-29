import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer"
import { setCurrentGame } from "./game/reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: setCurrentGame,
    },
    
})