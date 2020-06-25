import React, { useState } from "react";
import "./style.scss";

export default function Search() {
  const [
    { isManufacturer, isModel, isMinPrice, isMaxPrice },
    setVisibility,
  ] = useState({
    isManufacturer: false,
    isModel: false,
    isMinPrice: false,
    isMaxPrice: false,
  });

  const handleClick = (e) => {
    const { id } = e.target;

    setVisibility((prevState) => {
      return {
        isManufacturer: false,
        isModel: false,
        isMinPrice: false,
        isMaxPrice: false,
        [id]: !prevState[id],
      };
    });
  };

  return (
    <div class="search">
      <p class="search__title">Used Search</p>

      <div
        id="isManufacturer"
        className={`dropdown ${isManufacturer ? "visible" : ""}`}
        onClick={handleClick}
      >
        Select Manufacturer
        <span className="arrow">▼</span>
        <div className="menu">
          <div className="menu__item" data-value="1">
            1
          </div>
          <div className="menu__item" data-value="0">
            2
          </div>
        </div>
      </div>

      <div
        id="isModel"
        className={`dropdown ${isModel ? "visible" : ""}`}
        onClick={handleClick}
      >
        Select Model
        <span className="arrow">▼</span>
        <div class="menu">
          <div class="menu__item" data-value="1">
            1
          </div>
          <div class="menu__item" data-value="0">
            2
          </div>
        </div>
      </div>
      <div
        id="isMinPrice"
        className={`dropdown dropdown--half ${isMinPrice ? "visible" : ""}`}
        onClick={handleClick}
      >
        Min Price
        <span className="arrow">▼</span>
        <div className="menu">
          <div className="menu__item" data-value="1">
            1
          </div>
          <div className="menu__item" data-value="0">
            2
          </div>
        </div>
      </div>
      <div
        id="isMaxPrice"
        className={`dropdown dropdown--half ${isMaxPrice ? "visible" : ""} `}
        onClick={handleClick}
      >
        <span className="arrow">▼</span>
        Max Price
        <div className="menu">
          <div className="menu__item" data-value="1">
            1
          </div>
          <div className="menu__item" data-value="0">
            2
          </div>
        </div>
      </div>

      <button className="btn">Submit</button>
    </div>
  );
}

// <div className="containerr">
//   <input type="hidden" className="inputt" />
//   {/* <i class="dropdown icon"></i> */}
//   <div className="default-text">Gender</div>
//   <div className="menu-hidden menu-visible">
//     <div className="item">Male</div>
//     <div className="item">Female</div>
//   </div>
// </div>

{
  /* <div className="dropdown-selection dropdown-selection-active">
<select class="dropdown">
  <option value="">Min Price</option>
  <option value="1">Male</option>
</select>
</div>
<div className="dropdown-selection dropdown-selection-active">
<select class="dropdown">
  <option value="">Max Price</option>
  <option value="1">Male</option>
</select>
</div> */
}
