import React, { useEffect, useRef } from 'react';
import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';
import { useSelector } from 'react-redux'

import qs from "qs";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { selectorFilters, selectorSort } from '../redux/filters/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filters/slice';
import { fetchPizza } from '../redux/pizza/AsyncAction';
import { pizzaSelector } from '../redux/pizza/selectors';
import { pizzaParamsProps } from '../redux/pizza/types';
import { list } from '../components/Sort';

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const limit = 4

    const { items, status, count } = useSelector(pizzaSelector)
    const { categoryId, searchValue, currentPage } = useSelector(selectorFilters)
    const sortType = useSelector(selectorSort)

    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const pagination = count >= 0 ? `&page=${currentPage}&limit=${limit}` : ""


    const fetchPizzaz = async () => {
        dispatch(
            fetchPizza({
                category,
                sortBy,
                order,
                search,
                pagination
                })
            )
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as pizzaParamsProps

            const sort = list.find((obj) => obj.sortProperty === params.sortBy)
           
            dispatch(setFilters({
            searchValue: params.search,
            categoryId: Number(params.category),
            currentPage: currentPage,
            sort: sort ? sort : list[0]
            }))
            isSearch.current = true
        }
    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzaz()
        }

        isSearch.current = false
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])


    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType.sortProperty,
                categoryId,
                currentPage: currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sortType, searchValue, currentPage])

    const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
    const skelotns = [...new Array(limit)].map((_, index) => <Skeleton key={index} />)

    return (
        <>
            <div className="content__top">
                <Categories
                    id={categoryId}
                    changeCategory={(id) => dispatch(setCategoryId(id))}
                    changeCurrent={() => dispatch(setCurrentPage(1))}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status === "error" ? (
                    <div className="content__error-info">
                        <h2>Произошла ошибка 😕</h2> <br />
                        <p>
                            К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.
                        </p>
                    </div>) : <div className="content__items">{status === "loading" ? skelotns : pizzas}</div>}
            </div>
            {count > 0 ?
                <Pagination
                    onChangePagination={(num) => dispatch(setCurrentPage(num))}
                    count={count}
                    current={currentPage}
                    limit={limit}
                /> : ""}
        </>
    )
}

export default Home;