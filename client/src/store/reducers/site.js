import { create } from '@mui/material/styles/createTransitions';
import { createSlice } from '@reduxjs/toolkit';

export const siteSlice = createSlice({
  name: 'site',
  initialState: {
    layout: '',
  },
  reducers: {},
});

export default siteSlice.reducer;
