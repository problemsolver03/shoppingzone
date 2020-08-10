import React from "react";
import { connect} from 'react-redux'
import { addToCart } from '../../redux/actions';

class Product extends React.Component {

	addProductToCart = (id) => { 
		let product = this.props.products.filter(product => product.id === id);
		this.props.addToCart(product[0]);
	}
	render() {
		
		const { image,title,colour,brand,price,discount,id } = this.props.details;
    return (
      <div className="product">
			<div className="image-holder" style={{backgroundImage:`url(${image})`}}>

				{
					discount !== 0 ?
						
					<span className="discount">
							{discount}% <br /> OFF
				  </span>:null
				}
          
          <span className="colors">
					<i style={{ backgroundColor: colour.color }} title={colour.title}></i>
          </span>
        </div>

        <div className="description-holder">
          <h4>{title}</h4>
				<span>{brand}</span>
          <div className="price-holder">
					<span className="price">$ {price.final_price}</span>
					<button className="add-to-cart"  onClick={() => { this.addProductToCart(id)}}> + ADD</button>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => { 
	return {products:state.products}
}

export default connect(mapStateToProps, {addToCart})(Product);
