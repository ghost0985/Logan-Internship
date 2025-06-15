import React from "react";

const ItemDetailsSkeleton = () => (
  <div className="item-skeleton__container">

    <div className="item-skeleton__image skeleton"></div>

    <div className="item-skeleton__info">
      <div className="item-skeleton__title skeleton"></div>
      <div className="item-skeleton__stats">
        <div className="item-skeleton__stat skeleton"></div>
        <div className="item-skeleton__stat skeleton"></div>
      </div>
      <div className="item-skeleton__desc skeleton"></div>

      <div className="item-skeleton__section">
        <h6>Owner</h6>
        <div className="item-skeleton__user">
          <div className="item-skeleton__avatar skeleton"></div>
          <div className="item-skeleton__name skeleton"></div>
        </div>
      </div>
  
      <div className="item-skeleton__section">
        <h6>Creator</h6>
        <div className="item-skeleton__user">
          <div className="item-skeleton__avatar skeleton"></div>
          <div className="item-skeleton__name skeleton"></div>
        </div>
      </div>
    
      <div className="item-skeleton__section">
        <h6>Price</h6>
        <div className="item-skeleton__price skeleton"></div>
      </div>
    </div>
  </div>
);

export default ItemDetailsSkeleton;
