import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SortSearch.styles.scss";

function SortSearch() {
  const [checked, setChecked] = useState([]);
  const dispatch = useDispatch();

  const sortCheckboxTypes = [
    { id: 4, name: "SORT_BY_STOPS", label: "Все" },
    { id: 0, name: "SORT_BY_STOPS", label: "Без пересадок" },
    { id: 1, name: "SORT_BY_STOPS", label: "1 пересадка" },
    { id: 2, name: "SORT_BY_STOPS", label: "2 пересадки" },
    { id: 3, name: "SORT_BY_STOPS", label: "3 пересадки" },
  ];
  const handleToggle = (item) => {
    console.log("item:", item);
    const currentIndex = checked.indexOf(item);
    console.log("currentIndex:", currentIndex);
    const newChecked = [...checked];
    console.log("newChecked:", newChecked);
    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log("checked after handle:", checked);
    dispatch({ type: "SORT_BY_STOPS", payload: newChecked });
  };

  return (
    <div className="sort-container">
      <div className="sort-container-header">КОЛИЧЕСТВО ПЕРЕСАДОК</div>

      {sortCheckboxTypes.map((item, ind) => (
        <div className="sort-input" key={ind}>
          <input
            type="checkbox"
            name={item.name}
            onChange={() => handleToggle(item.id)}
            checked={checked.indexOf(item.id) === -1 ? false : true}
          />
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
}

export default SortSearch;
