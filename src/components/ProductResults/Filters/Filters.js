import React from 'react';
import ColorFilter from './Options/ColorFilter';
import BrandFilter from './Options/BrandFilter';
import PriceFilter from './Options/PriceFilter';
import DiscountFilter from './Options/DiscountFilter';
import { connect } from 'react-redux';
import { filterProducts, resetFilter } from '../../../redux/actions';



class Filter extends React.Component{

    onFiltering = () => {

        let products = [...this.props.products];
        
        let colors = document.querySelectorAll('input[name="color"]');
        let selectedColors = [];
        
        let brands = document.querySelectorAll('input[name="brand"]');
        let selectedBrands = [];

        let priceMax = Number(document.querySelector('input[name="priceRange"]').value);
        let priceMin = Number(document.querySelector('input[name="priceRange"]').getAttribute('min'))

        let discountMax = Number(document.querySelector('input[name="discountRange"]').value);
        let discountMin = Number(document.querySelector('input[name="discountRange"]').getAttribute('min'));

        
        for (let i = 0; i < colors.length; i++) { 
            if (colors[i].checked) { 
                selectedColors.push(colors[i].getAttribute('data-val'));
            }
        }

        for (let i = 0; i < brands.length; i++) { 
            if (brands[i].checked) { 
                selectedBrands.push(brands[i].getAttribute('data-val'));
            }
        }

        const filterColor = () => { 
            products = products.filter((p) => selectedColors.includes(p.colour.title));
            filterBrand();
        }


        const filterBrand = () => { 
            products = products.filter((p) => selectedBrands.includes(p.brand));
            filterPrice();
        }

        const filterPrice = () => { 
            products = products.filter((p) => p.price.final_price <= priceMax && p.price.final_price >= priceMin)
            filterDiscount();
        }

        const filterDiscount = () => { 
            products =products.filter((p)=> p.discount <= discountMax && p.discount >= discountMin)
        }

        filterColor();

        this.props.filterProducts(products)
     }
    
render() { 
       
        let { colors, brands, price, discounts } = this.props;
        return ( 

            <aside className="filter">
                <h4 className="border-bottom">Filters <button className="small-btn" type="button" onClick={this.props.resetFilter}>Reset</button></h4>
                    <ColorFilter colors={colors} onFiltering={this.onFiltering} />
                    <BrandFilter brands={brands} onFiltering={this.onFiltering}/>
                    <PriceFilter priceRange={price} onFiltering={this.onFiltering} />
                    <DiscountFilter discountRange={discounts} onFiltering={this.onFiltering} />
                </aside>
        )
    }
}

const mapStateToProps = (state) => {    
   
    let colors = [];
    let brands = [];
    let price = [];
    let discounts = [];      

    for (let product of state.products) { 

        if (colors.indexOf(product.colour.title) === -1) { 
              colors.push(product.colour.title)
        }

        if (brands.indexOf(product.brand) === -1) { 
            brands.push(product.brand)
        }

        price.push(product.price.final_price);
        discounts.push(product.discount);
    }  
    
    
    return {
        products:state.products,
        colors,
        brands,
        price: [Math.min(...price), Math.max(...price)],
        discounts: [Math.min(...discounts), Math.max(...discounts)]
    }
}

export default connect(mapStateToProps, {filterProducts,resetFilter})(Filter);