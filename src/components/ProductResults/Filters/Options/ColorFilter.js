import React from 'react';


class ColorFilter extends React.Component{
    render() { 
        return (
            <div className="filterOption">
				<h4>Colors</h4>
				
				{
					this.props.colors.map((option, i) => { 
						return (
							<span key={i} className="colorOption">
								<input type="checkbox" name="color" data-val={option} defaultChecked onChange={this.props.onFiltering} />
								<label>{option}</label>
						</span>
						)
					})
				}
   	     	 	 

   	     	 	  
   	     	 </div>
        )
    }
}

export default ColorFilter;