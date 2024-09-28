"use client";
import { React } from "react";
import { useState } from "react";
export default function NewItem() {
    const[quantity, setQuantity] = useState(1);
    
    
    let increment = () => {
        if(quantity>=20){
            return;
        }
        else{
            setQuantity(quantity + 1);
        }
    };

    let decrement=()=>{
        if(quantity<=1){
            return;
        }
        else{
            setQuantity(quantity - 1);
        }
    };
    return(
        <div className="max-h-screen flex justify-center">
            <div className="bg-white w-40 h-12 flex flex-row justify-around mt-8">
                <p className="text-black flex-1 mt-3 ml-3">{quantity}</p>
                <div className="flex flex-1 w-10 justify-around">
                    <button onClick={decrement} className={` text-white w-8 h-6 mt-3 rounded ${quantity===1 ?'bg-gray-500 ':'bg-blue-500  hover:bg-blue-700'}`}>-</button>
                    <button onClick={increment} className={` text-white  w-8 h-6 mt-3 rounded ${quantity===20 ?'bg-gray-500 ':'bg-blue-500  hover:bg-blue-700'}`}>+</button>
                </div>   
            </div>
        </div>
        
    );
}