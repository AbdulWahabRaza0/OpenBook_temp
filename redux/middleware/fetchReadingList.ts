import { client } from '@/service/client';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fecthReadingList = createAsyncThunk(
  'fecthReadingList',
  async (token: any) => {
    console.log('i am inside ');
    const readingData: any = [];
    let datas: any;
    try {
      let bearer =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2NzgyNzA1MDUsImV4cCI6MTY3ODg3NTMwNX0.ggh8DNnZNYU7syowI1cqMaJDhBvLRhOHrAVsp2Cqetg';
      await client
        .get('reading-list/getMyReadingLists', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res) {
            console.log(res, 'i am the data');
            const data = res.data.readingList;
            console.log('i am the data', data);
            if (data.length > 0) {
              for (let i of data) {
                readingData.push(i);
              }
            } else {
              datas = 'Create Your Own List';
            }
          }
        })
        .catch((error) => console.log(error));

      return { readingData, datas };
    } catch (error: any) {}
  }
);
