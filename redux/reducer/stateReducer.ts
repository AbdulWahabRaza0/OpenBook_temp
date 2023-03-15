import { createSlice } from '@reduxjs/toolkit';

type arrayId = {
  id?: Number;
};
type IntialState = {
  nameUse: String;
  discovery: arrayId[];
  discoveryNo: Number;
  token: any;
  summary: any;
  handle: any;
};
const initialState: IntialState = {
  nameUse: 'Daily',
  discovery: [],
  discoveryNo: 0,
  token: '',
  summary: '',
  handle: '',
};
export function setNavBar(value: any) {
  return value;
}
const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.nameUse = action.payload;
    },
    setDiscovery: (state, action) => {
      state.discovery.push(action.payload);
    },
    setSign: (state, action) => {
      state.discoveryNo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setHandler: (state, action) => {
      state.handle = action.payload;
    },
  },
});
export const {
  setState,
  setDiscovery,
  setSign,
  setToken,
  setSummary,
  setHandler,
} = userSlice.actions;
export default userSlice.reducer;
