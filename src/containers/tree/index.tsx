import React from "react";
import tree from "./tree.html";

export default function Index() {
  return (
    <div className="index">
      <div dangerouslySetInnerHTML={{ __html: tree }}></div>
    </div>
  );
}
