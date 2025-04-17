import MenuCard from "./MenuCard"
import { useState } from "react"
const ResCategory=({data,showItems,setShowIndex})=>{
   
    const handleClick=()=>{
        setShowIndex();
    }
    return(
        <div>
              <div className="category-container" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <div className="down">
                {showItems ? '🔼' : '🔽'}
                </div>
                </div>
                <div className="category-item">
                    {
                        data.itemCards.map((item)=>(
                            
                             showItems && <MenuCard  key={item?.card?.info?.id} food={item} />
                            
                            
                        ))
                        
                    }
                    
                </div>
        </div>
      
    )
}
export default ResCategory