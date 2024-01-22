import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://651e799f44a3a8aa47686fa4.mockapi.io/api/adverts';
const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await instance.get(`${BASE_URL}?page=${page}&limit=12`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
