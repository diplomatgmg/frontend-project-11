import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Post } from './containers/MainSection'

interface PostState {
  posts: Post[]
}

interface StoreState {
  posts: PostState
}

const initialState: PostState = {
  posts: []
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state: any, action: PayloadAction<any>) => {
      state.posts = action.payload
    }
  }
})

export const { setPosts } = postsSlice.actions

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer
  }
})

export default store
export { type PostState, type StoreState }
