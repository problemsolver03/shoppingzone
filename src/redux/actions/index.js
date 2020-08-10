export const getUser = (user) => { 
    return {
        type: 'GET_USER',
        payload:user
    }
}

export const loadProducts = (products) => { 
    return {
        type: 'LOAD_PRODUCTS',
        payload:products
    }
}
export const filterProducts = (products) => {
    return {
        type: 'FILTERED_PRODUCTS',
        payload:products
    }
}


export const resetFilter = () => {
    return {
        type: 'RESET_FILTER'
    }
}




export const addToCart = (product) => { 
    return {
        type: 'ADD_PRODUCT',
        payload:product
    }
}

// export const fetchPosts = () =>
//     async (dispatch) => { 
//         const response = await JSONPlaceHolder.get('/posts');
//         dispatch({type:'FETCH_POSTS',payload:response.data})
//     }