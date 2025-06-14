import React from "react";
import "../../css/styles/skeleton.css";

const AuthorSkeleton = () => {
  return (
    <>
      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex align-items-center">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <div className="skeleton author-skeleton__avatar"></div>
                    <div className="profile_name">
                      <div className="skeleton author-skeleton__name-line"></div>
                      <div className="skeleton author-skeleton__username-line"></div>
                      <div className="skeleton author-skeleton__wallet-line"></div>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col align-items-center">
                    <div className="skeleton author-skeleton__follow"></div>
                    <div className="skeleton author-skeleton__btn"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSkeleton;
