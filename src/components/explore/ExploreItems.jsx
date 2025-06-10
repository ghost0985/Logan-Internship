import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Countdown from "../Animations/Countdown";
import DisplaycardSkeleton from "../Animations/DisplaycardSkeleton";

const ExploreItems = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const fetchItems = async (filterValue = "") => {
    setLoading(true);
    try {
      const url = `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore${
        filterValue ? `?filter=${filterValue}` : ""
      }`;
      const response = await axios.get(url);
      setItems(response.data);
      setVisibleCount(8);
    } catch (error) {
      console.error("Failed to fetch data...", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(filter);
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <select id="filter-items" value={filter} onChange={handleFilterChange}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {loading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <DisplaycardSkeleton />
            </div>
          ))
        : items.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to={`/author/${item.authorId}`}>
                    <img
                      className="lazy"
                      src={item.authorImage || AuthorImage}
                      alt=""
                    />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

                {item.expiryDate && (
                  <div className="de_countdown">
                    <Countdown expiryDate={item.expiryDate} />
                  </div>
                )}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="#">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to={`/item-detail/${item.nftId}`}>
                    <img
                      src={item.nftImage || nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="nft__item_info">
                  <Link to={`/item-detail/${item.nftId}`}>
                    <h4>{item.title}</h4>
                  </Link>
                  <div className="nft__item_price">{item.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

      {!loading && visibleCount < items.length && (
        <div className="col-md-12 text-center">
          <button
          onClick={handleLoadMore}
          id="loadmore"
          className="btn-main lead"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
