import React, { useState, useCallback, useRef } from "react";
import styles from "./Search.module.scss";
import searchIcon from "../../assets/img/search.svg"
import closeIcon from "../../assets/img/close.svg"
import { useDispatch } from 'react-redux'


import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/filters/slice";

const Search = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 1000),
        [],
    )

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value)
    }

    const onClickClear = () => {
        setValue("");
        dispatch(setSearchValue(""))
    }

    return (
        <div className={styles.root}>
            <input ref={inputRef} onChange={onChangeInput} value={value} className={styles.input} placeholder="Поиск пиццы..." />
            <img className={styles.icon} src={searchIcon} alt="" />
            <img onClick={onClickClear} className={styles.close} src={closeIcon} alt="" />
        </div>
    )
}

export default Search;