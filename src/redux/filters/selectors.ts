import { RootState } from "../store"

export const selectorSort = (state: RootState) => state.filters.sort
export const selectorFilters = (state: RootState) => state.filters
