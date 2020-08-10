import { combineReducers } from 'redux';


const user = (state = null, action) => { 
    
    switch (action.type) { 
        case "GET_USER":
            return {user:action.payload};
        
        default:
            return state;
    }
    
    
}
const products = (state=[],action) => { 
    switch (action.type) { 
        case "LOAD_PRODUCTS":
            return action.payload;
        
        default:
            return state;
    }
}

const filteredProducts = (state = [], action) => { 
    
    switch (action.type) { 
        case "FILTERED_PRODUCTS":
            return [...action.payload];
        case "RESET_FILTER":
            return [];
        default:
            return state;
    }
}

const inCart = (state = [], action) => { 
    switch (action.type) { 
        case "ADD_PRODUCT":
            return [...state,action.payload];
        
        default:
            return state;
    }
}

export default combineReducers({ products, filteredProducts,user,inCart });