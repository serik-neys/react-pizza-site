import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { filterSliceState, SortPropertyEnum, SortType } from './types'


const initialState: filterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_ASC,
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state, action: PayloadAction<filterSliceState>) {
      state.sort = action.payload.sort
      state.categoryId = Number(action.payload.categoryId)
      state.currentPage = Number(action.payload.currentPage)
    },
  },
})


// Action creators are generated for each case reducer function
export const {
  setCategoryId,
  setSearchValue,
  setSort,
  setCurrentPage,
  setFilters
} = filterSlice.actions

export default filterSlice.reducer