import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useAppDispatch } from '../redux/store';
import { fetchFullPizza } from '../redux/fullPizza/AsyncAction';
import { selectorPizzaItem } from '../redux/fullPizza/selectors';

const FullPizza = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const pizza = useSelector(selectorPizzaItem)

    useEffect(() => {
        if (id) {
            dispatch(fetchFullPizza(id))
        }
    }, [])


    if (!pizza) {
        return <div>Загрузка...</div>
    }

    return (
        <div className="container">
            <div className="pizza__wrapper">
                <img src={pizza.imageUrl} alt={pizza.title} />
                <div className="pizza__content">
                    <h1>{pizza.title}</h1>
                    <h4><span>Цена:</span> {pizza.price} ₸ </h4>
                </div>
            </div>
        </div>
    )
}

export default FullPizza;