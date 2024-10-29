/*step 1 , configure store*/
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'


export const store= configureStore({
    reducer:todoReducer
})

/*store is restricted - mere andar jo jo reducer register kroge main sirf unse hi values leke update krta hun*/



