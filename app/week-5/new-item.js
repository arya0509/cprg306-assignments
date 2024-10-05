"use client";
import { React } from "react";
import { useState } from "react";
export default function NewItem() {
    const[quantity, setQuantity] = useState(1);
    const[name,setName] = useState("");
    const[category,setCategory] = useState("Produce");

    const handleSubmission=(e)=>{
        e.preventDefault();
        const item={
            name,
            category,
            quantity
        }
        console.log(item);
        alert(`Name: ${name} \nCategory: ${category} \nQuantity: ${quantity}`);
        setQuantity(1);
        setName("");
        setCategory("Produce");
    }
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
        <form className="flex justify-center items-center bg-slate-900 flex-col h-56 mt-10 p-5 w-96 " >
           
            <input placeholder="Item Name" type="text" value={name} onChange={(e)=>setName(e.target.value)} required className="w-full rounded-lg p-3 text-black"></input>
            
            <div className="flex flex-row w-full justify-between mt-7 h-24">
                
                    <div className="bg-white w-40 h-12 flex flex-row justify-center">
                        <p className="text-black flex-1 mt-3 ml-3">{quantity}</p>
                        <div className="flex flex-1 w-15 justify-between  mr-2">
                            <button type="button" onClick={()=>quantity>1?setQuantity(quantity-1):''} className={` text-white w-8 h-6 mt-3 rounded ${quantity===1 ?'bg-gray-500 ':'bg-blue-500  hover:bg-blue-700'}`}>-</button>
                            <button type="button"onClick={()=>quantity<20?setQuantity(quantity+1):''} className={` text-white  w-8 h-6 mt-3 rounded ${quantity===20 ?'bg-gray-500 ':'bg-blue-500  hover:bg-blue-700'}`}>+</button>
                        </div>   
                    </div>
          
                    <select value={category} onChange={e=>setCategory(e.target.value)} className="h-12 rounded-lg text-black p-3 ">
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>

            </div>
            
            <button onClick={handleSubmission} type="submit" className="bg-blue-700 w-full rounded-lg h-14">+</button>
        </form>

        
    );
}