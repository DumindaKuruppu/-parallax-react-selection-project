import React from 'react';
import ProductList from "./Components/ProductList";

const SplitPane = () => {
  return (
    <div>
      <div>
        <div style={{width: "60%", height: "100vh", float: "left"}}>
          <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "lavender"
          }}
          >
            left Pane
          </div>
        </div>
        <div style={{width: "40%", height: "100vh", float: "left"}}>
          <div style={{
            height: "100vh"
          }}
          >
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitPane;