import React from "react"

type CategoriesProps = {
  id: number;
  changeCategory: (index: number) => void;
  changeCurrent: () => void;
}

const Categories: React.FC<CategoriesProps> = ({ id, changeCategory, changeCurrent }) => {
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]

  const classActive = (index: number) => id === index ? "active" : ""

  const changeParams = (index: number) => {
    changeCurrent()
    changeCategory(index)
  }
  return (
    <div className="categories">
      <ul>

        {categories.map((value, index) =>
          <li key={index} onClick={() => changeParams(index)} className={classActive(index)}>{value}</li>
        )}
      </ul>
    </div>
  )
}

export default Categories;

