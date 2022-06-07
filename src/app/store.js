import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import {recipeApi} from '../services/recepiApi'

const store = configureStore({
  reducer:{
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(recipeApi.middleware)
})
setupListeners(store.dispatch)

export default store