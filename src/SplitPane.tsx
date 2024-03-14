import React from 'react';
import ProductList from "./components/ProductList";

const SplitPane = () => {
  return (
    <div style={{height: "inherit"}}>
      <div style={{height: "inherit"}}>
        <div style={{width: "60%", height: "inherit", float: "left"}}>
          <div style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lavender",
            borderRadius: "5px",
          }}
          >
            left Pane
          </div>
        </div>
        <div style={{width: "40%", height: "inherit", float: "left", overflow: "scroll"}}>
          <div style={{
            height: "100%",
          }}
          >
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;