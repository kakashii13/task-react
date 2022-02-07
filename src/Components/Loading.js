import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Loading() {
  return (
    <div>
      <Skeleton width={20} height={20} />
    </div>
  );
}

export { Loading };
