export type statusType = "loading" | "success" | "error";


export type Pizza = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
}

export type PizzaObj = {
    items: Pizza[];
    count: number;
    requestId: any;
    anyKey: any;
}

export type pizzaParamsProps = {
    category: string;
    sortBy: string;
    order: string;
    search: string
    pagination: string;
}

export interface PizzaSliceState {
    items: Pizza[];
    count: number;
    status: statusType;
}

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}
