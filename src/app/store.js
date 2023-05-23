import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/User/UserSlice'
// import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
    // counter: counterReducer
  }
})