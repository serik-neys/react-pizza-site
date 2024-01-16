import { Pizza, statusType } from '../pizza/types';

export interface fullPizzaSliceState {
    item: Pizza;
    status: statusType;
}