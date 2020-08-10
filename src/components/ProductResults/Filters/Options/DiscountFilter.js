import React from 'react';


class DiscountFilter extends React.Component{


	render() {
		let [min, max] = this.props.discountRange;
        return (
            <div className="filterOption">
   	     	 	  <h4>Discount</h4>
   	     	 	 <div className="">
					  <div>
						<input type="range" min={min} max={max} defaultValue={max} name="discountRange" onChange={this.props.onFiltering}/>
						<b>{min}</b>
						<b className="float-right">{max}</b>
					</div>
   	     	 	 </div>
   	     	 </div>
        )
    }
}

export default DiscountFilter;