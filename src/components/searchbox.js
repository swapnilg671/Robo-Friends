import React from "react";

const Searchbox=({searchChange})=>{
    return(
<div className="pa2 " >
<input 
    className='pa3 ba b--green bg-light-blue '
    type='search' 
    onChange={searchChange}
    placeholder='Search Robots'/>
</div>

    );

}
export default Searchbox;