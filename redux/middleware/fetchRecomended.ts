import { client } from '@/service/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fecthRecomended = createAsyncThunk(
  'fecthRecomended',
  async (token: any) => {
    console.log('i am inside ', token);
    const tilesData: any = [];
    try {
      let bearer =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2NzgyNzA1MDUsImV4cCI6MTY3ODg3NTMwNX0.ggh8DNnZNYU7syowI1cqMaJDhBvLRhOHrAVsp2Cqetg';
      await client
        .get('article/getAlLRecomendedArticles', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res) {
            const data = res.data.Data;
            console.log(res, 'i the response of data');
            for (let i of data) {
              tilesData.push(i);
            }
          }
        })
        .catch((error) => console.log(error));

      return tilesData;
    } catch (error: any) {}
  }
);
