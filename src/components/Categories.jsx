import React from "react";

import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  items,
  activeCategory,
  onClickCategory,
}) {
  return (
    <nav className="categories">
      <ul className="flex">
        {items.map((name, index) => (
          <li
            className={index === activeCategory ? "active" : ""}
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

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.number.isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

export default Categories;
