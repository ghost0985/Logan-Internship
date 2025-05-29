import React from "react";
import "../../css/styles/skeleton.css";

export default function SkeletionCard() {
  return (
    <div className="skeletonCard">
      <div className="skeleton-background" />
      <div className="skeleton-avatar" />
      <div className="skeleton-title" />
      <div className="skeleton-code" />
    </div>
  );
}
