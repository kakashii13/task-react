import React from "react";
import "../Style/Loading.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Loading() {
  return (
    <div className="Loading">
      <Skeleton width={300} height={40} />
    </div>
  );
}

export { Loading };
