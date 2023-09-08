import { Dispatch, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { basicUrl } from '../config/base';

interface UsersState {
  users: any[],
  error: boolean,
  loading: boolean,
  activeUser: number,
  checkbox: boolean,
  selected: number[]
}

const initialState: UsersState = {
  users: [],
  error: false,
  loading: false,
  activeUser: 1,
  checkbox: false,
  selected: []
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    SetUsers: (state, action: PayloadAction<any>) => {
        state.users = action.payload;
    },
    SetError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    SetLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    SetActiveUser: (state, action: PayloadAction<number>) => {
      state.activeUser = action.payload;
    },
    SetCheckbox: (state, action: PayloadAction<boolean>) => {
      state.checkbox = action.payload;
    },
    SetSelected: (state, action: PayloadAction<number[]>) => {
      state.selected = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { SetUsers, SetError, SetLoading, SetActiveUser, SetCheckbox, SetSelected } = userSlice.actions;

// Selectors
export const selectUsers = (state: any) => state.users.users;
export const selectError = (state: any) => state.users.error;
export const selectLoading = (state: any) => state.users.loading;
export const selectActiveUser = (state: any) => state.users.activeUser;
export const selectCheckbox = (state: any) => state.users.checkbox;
export const selectSelected = (state: any) => state.users.selected;


// Thunk actions 
export const getUsers = ():any => {
  return async (dispatch: Dispatch) => {
    dispatch(SetLoading(true));
    try{
      const res = await axios.get(basicUrl + '/users');
      dispatch(SetUsers(res.data));
      dispatch(SetLoading(false));
    } catch {
      dispatch(SetError(true));
    }
  }
};

export default userSlice.reducer;