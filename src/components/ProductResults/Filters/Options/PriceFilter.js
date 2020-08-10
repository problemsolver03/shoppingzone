import React from 'react';


class PriceFilter extends React.Component{
	
    render() { 

		let [min, max] = this.props.priceRange;
		
        return (
            <div className="filterOption">
   	     	 	  <h4>Price range</h4>
   	     	 	 <div className="">
   	     	 	 						
					<div>
						<input type="range" min={min} max={max} defaultValue={max} name="priceRange" onChange={this.props.onFiltering}/>
						<b>{min}</b>
						<b className="float-right">{max}</b>
					</div>
   	     	 	 </div>
   	     	 </div>
        )
    }
}

export default PriceFilter;