import React from "react";
import { connect } from "react-redux";
import Header from "../Layout/Header/Header.js";
import Filters from "./Filters/Filters";
import Product from "./Product";
import { loadProducts } from "../../redux/actions";
import api from "../../apis/api";

class Results extends React.Component {
  componentDidMount() {
    const getProducts = async () => {
      const response = await api.get("/products").catch(err => console.log(err));
      this.props.loadProducts(response.data);
    };
    getProducts();
  }

  render() {
    return (
      <>
        <Header />

        <section className="container flex">
          {this.props.products.length === 0 ? (
            <h3 className="alert alert-caution">No products to display... </h3>
          ) : (
            <>
              <Filters />
              <div className="search-results">
                <h3 className="prm-header">
                  Showing <span>{this.props.products.length}</span> products
                </h3>
                <div className="row">
                  {this.props.products.map((product) => (
                    <Product key={product.id} details={product} />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </>
    );
  }
}

const mapStateToProducts = (state) => {
  if (state.filteredProducts.length === 0) {
    return { products: state.products, user: state.user };
  } else {
    return { products: state.filteredProducts, user: state.user };
  }
};

export default connect(mapStateToProducts, { loadProducts })(Results);
