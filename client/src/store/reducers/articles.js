import { createSlice } from '@reduxjs/toolkit';
import {
  addArticle,
  changeStatusArticle,
  getPaginateArticles,
} from '../actions/articles';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    homeSort: {},
    loading: false,
    articles: [],
    current: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // add article
      .addCase(addArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.lastAdded = action.payload;
      })
      .addCase(addArticle.rejected, (state) => {
        state.loading = false;
      })
      // GET PAGINATE ARTILCLES
      .addCase(getPaginateArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaginateArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.adminArticles = action.payload;
      })
      .addCase(getPaginateArticles.rejected, (state) => {
        state.loading = false;
      })
      // change status of article
      .addCase(changeStatusArticle.fulfilled, (state, action) => {
        state.adminArticles.docs = action.payload;
      });
  },
});

export default articlesSlice.reducer;
