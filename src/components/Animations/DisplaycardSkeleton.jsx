
import React from "react";

const DisplaycardSkeleton = () => {
  return (
    <div className="nft__item">
      <div className="author_list_pp">
        <div className="skeleton skeleton-author" />
      </div>

      <div className="de_countdown">
        <div className="skeleton skeleton-countdown" />
      </div>

      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <div className="skeleton skeleton-button" />
          </div>
        </div>
        <div className="skeleton skeleton-image" />
      </div>

      <div className="nft__item_info">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-price" />
        <div className="skeleton-likes-wrapper">
          <div className="skeleton skeleton-likes" />
        </div>
      </div>
    </div>
  );
};

export default DisplaycardSkeleton;
