import React from "react"

const Quality = (item) => {
    
    console.log('quality', item)

            return  <span 
                        className={"badge m-1 bg-" + item.quality.color} 
                        key={item.quality._id}>
                            {item.quality.name}
                    </span>
}

export default Quality