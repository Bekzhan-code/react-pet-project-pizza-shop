import React from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <nav className="categories">
      <ul className="flex">
        {items.map((name, index) => (
          <li
            className={index === activeItem ? "active" : ""}
            key={name}
            onClick={() => onClickCategory(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Categories;
