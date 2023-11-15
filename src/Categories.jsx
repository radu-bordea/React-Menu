import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((categorie) => {
        return (
          <button type="button" className="btn" key={categorie}>
            {categorie}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
Categories;
