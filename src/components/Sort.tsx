import React, { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { selectorSort } from "../redux/filters/selectors";
import { setSort } from "../redux/filters/slice";
import { SortPropertyEnum } from "../redux/filters/types";

export type typeList = {
  name: string;
  sortProperty: SortPropertyEnum
}

type PopupClick = MouseEvent & {
  path: Node[];
}

export const list: typeList[] = [
  {name: "популярнсти", sortProperty: SortPropertyEnum.RATING_ASC},
  {name: "не популярнсти", sortProperty: SortPropertyEnum.RATING_ASC},
  {name: "цена по убыванию", sortProperty: SortPropertyEnum.PRICE_ASC},
  {name: "цена по возрастанию", sortProperty: SortPropertyEnum.PRICE_DESC},
  {name: "алфавиту", sortProperty: SortPropertyEnum.TITLE_ASC},
  {name: "наоборот", sortProperty: SortPropertyEnum.TITLE_DESC}
]

 const Sort: React.FC = () => {
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const value = useSelector(selectorSort)
  const sortRef = useRef<HTMLDivElement>(null)


  const setActiveValue = (index: any) => {
    setOpen(!open)
    dispatch(setSort(index))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if(sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false)
      }
    }

    document.body.addEventListener("click", handleClickOutside)

    return () =>  {
      document.body.removeEventListener("click", handleClickOutside)
    }
  },[])

    return(
      <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen((prev) => !prev )}>{value.name}</span>
      </div>
      {open && <div className="sort__popup">
        <ul>
          {list.map((obj, index) => 
          <li onClick={() => setActiveValue(obj)} key={index} className={obj.sortProperty === value.sortProperty ? "active" : ""}>{obj.name}</li>
          )}
        </ul>
      </div>}
    </div>
    )
  }
  

  export default Sort;