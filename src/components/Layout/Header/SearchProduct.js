import React from 'react';
import searchIcon from '../../../assets/search.svg';
import API from '../../../apis/api';
import { connect } from 'react-redux';
import { loadProducts } from '../../../redux/actions'

class SearchProduct extends React.Component {

    constructor(props) { 
        super(props);
        this.search = React.createRef();
    }

    searchProducts = async (e) => {
        e.preventDefault();
        const searchTerm = this.search.current.value;        

        const response = await API.get('/products', {
            params: {
                title: searchTerm
            }
        })
        .catch((err) => { 
             console.log(err)
            })

        this.props.loadProducts(response.data)

        
    }
    
    render() {

        return (
            <div className="search-holder">
                <form onSubmit={this.searchProducts}>
                <img src={searchIcon} alt="searchicon" />
                    <input type="text" name="search" className="search-bar" ref={this.search}/>
               </form>
            </div>
        )
    }
}

export default connect(null, {loadProducts})(SearchProduct);