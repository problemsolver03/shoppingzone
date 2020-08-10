import React from 'react';


class BrandFilter extends React.Component{
    render() { 
        return (
            <div className="filterOption">
				<h4>Brand</h4>
				
				{
					this.props.brands.map((option, i) => { 

						return (
							<span key={i} className="colorOption">
								<input type="checkbox" name="brand" defaultChecked data-val={option} onChange={this.props.onFiltering}/>
								<label>{option}</label>
							</span>
						)
					})
				}
   	     	 	  

   	     	 	 
   	     	 </div>
        )
    }
}

export default BrandFilter;