export enum SortPropertyEnum {
    RATING_ASC = "rating",
    RATING_DESC = "-rating",
    TITLE_ASC = "title",
    TITLE_DESC = "-title",
    PRICE_ASC = "price",
    PRICE_DESC = "-price",
  }
  
  export type SortType = {
    name: string;
    sortProperty: SortPropertyEnum
  }
  
 export interface filterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortType;
  }
  