import React from "react";

import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={290}
      height={550}
      viewBox="0 0 290 550"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="141" cy="141" r="141" />
      <rect x="0" y="292" rx="6" ry="6" width="290" height="34" />
      <rect x="-1" y="336" rx="6" ry="6" width="290" height="120" />
      <rect x="0" y="481" rx="6" ry="6" width="88" height="30" />
      <rect x="149" y="467" rx="20" ry="20" width="141" height="53" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
