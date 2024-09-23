// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   categories: [],
//   products: [],
//   isLoadingCategories: false,
//   isLoadingProducts: false,
//   error: null,
// };

// export const fetchCategories = createAsyncThunk('collection/fetchCategories', async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products/categories');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });

// export const fetchProductsByCategory = createAsyncThunk('collection/fetchProductsByCategory', async (category) => {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });

// const collectionSlice = createSlice({
//   name: 'collection',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.isLoadingCategories = true;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.isLoadingCategories = false;
//         state.categories = action.payload;
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.isLoadingCategories = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchProductsByCategory.pending, (state) => {
//         state.isLoadingProducts = true;
//       })
//       .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
//         state.isLoadingProducts = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchProductsByCategory.rejected, (state, action) => {
//         state.isLoadingProducts = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default collectionSlice.reducer;