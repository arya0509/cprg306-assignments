"use client";
import { React } from "react";
import { useState } from "react";
export default function NewItem() {
    let{quantity, setQuantity} = useState(1);
    
    
    let increment = () => {
        if(quantity>20){
            return;
        }
        else{
            setQuantity(quantity + 1);
        }
    };

    let decrement=()=>{
        if(quantity<1){
            return;
        }
        else{
            setQuantity(quantity - 1);
        }
    };
    return(
        <div className="bg-white">
            <button onClick={decrement} className="bg-blue-600 text-white">-</button>
            <p>{quantity}</p>
            <button onClick={increment} className="bg-blue-600 text-white">+</button>
        </div>
    );
}