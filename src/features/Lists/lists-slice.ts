import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListState } from "../../types/Lists/listsState";

const initialState: IListState = {
  skillsList: true,
};

export const showListSlice = createSlice({
  name: "@@showlists",
  initialState,
  reducers: {
    showSkillsList: (state, action: PayloadAction<boolean>) => {
      state.skillsList = action.payload;
    },
  },
});

export const { showSkillsList } = showListSlice.actions;
