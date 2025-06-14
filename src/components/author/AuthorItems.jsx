import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import DisplaycardSkeleton from "../Animations/DisplaycardSkeleton";

const AuthorItems = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const res = await fetch(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`
        );
        const data = await res.json();
        setAuthor(data);
      } catch (err) {
        console.error("Failed to fetch author data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAuthor();
  }, [id]); 

  const nfts = author?.nftCollection || [];

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                  <DisplaycardSkeleton />
                </div>
              ))
            : nfts.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to={`/author/${author.authorId}`}>
                        <img
                          className="lazy"
                          src={author.authorImage || AuthorImage}
                          alt={author.authorName}
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="nft__item_wrap">
                      <div className="nft__item_extra">
                        <div className="nft__item_buttons">
                          <button>Buy Now</button>
                          <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-envelope fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                      <Link to={`/item-detail/${item.nftId}`}>
                        <img
                          src={item.nftImage || nftImage}
                          className="lazy nft__item_preview"
                          alt={item.title}
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
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
