import React from "react";
import heart from "./heart.html";
import "./index.less";

export default function Index() {
  return (
    <div className="heart-content">
      <div dangerouslySetInnerHTML={{ __html: heart }} className="heart-box"></div>
    </div>
  );
}
