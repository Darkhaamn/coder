import { IListState } from "../../types/Lists/listsState";
import { RootState } from "../../types/store";

export const selectShowLists = (state: RootState): IListState =>
  state.showLists;
