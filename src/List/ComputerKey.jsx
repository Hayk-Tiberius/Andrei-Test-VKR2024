import React from "react";
import Computer from "./Computer";

const ComputerKey = ({computerKey}) => {
    return (
        <div className="computer-key">
            {computerKey.map((computer,index)=>{
            return (
                    <Computer
                        key={index}
                        itemName={computer.item_name}
                        quantity={computer.quantity}
                        reserve={computer.reserve}
                    />
                    )
                })
            }
        </div>
    )
}

export default ComputerKey