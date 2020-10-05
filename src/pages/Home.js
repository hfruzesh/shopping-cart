import React, { Component } from "react";
import ProductList from '../components/ProductList';

class Home extends Component {
  render() {
    const { updateData, info, productData } = this.props
    return (
      <div className="container">
        <div className="row">
          <ProductList
            productData={productData}
          />

        </div>
      </div>

    )
  }
}

export default Home;
