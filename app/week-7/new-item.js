"use client";
import { React } from "react";
import { useState } from "react";
export default function NewItem({OnAddItems=()=>{}}) {
    const[quantity, setQuantity] = useState(1);
    const[name,setName] = useState("");
    const[category,setCategory] = useState("produce");
    const[id,setId] = useState("");
    
    const handleSubmission=(e)=>{
        e.preventDefault();
        setId(generateId());
        const item={
            name,
            category,
            quantity,
            id
        }
        
        OnAddItems(item);
        
        setQuantity(1);
        setName("");
        setCategory("produce");
        setId("");
    }
    let generateId=()=>{
        const characters = '0123456789abcdef'; 
        let result = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
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
        <div className="flex  pl-5 w-full justify-center items-center">
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
                    <option value="produce">produce</option>
                    <option value="dairy">dairy</option>
                    <option value="bakery">bakery</option>
                    <option value="meat">meat</option>
                    <option value="frozen foods">frozen foods</option>
                    <option value="canned goods">canned goods</option>
                    <option value="dry goods">dry goods</option>
                    <option value="beverages">beverages</option>
                    <option value="snacks">snacks</option>
                    <option value="household">household</option>
                    <option value="other">other</option>
                </select>

        </div>
        
        <button onClick={handleSubmission} type="submit" className="bg-blue-700 w-full rounded-lg h-14">+</button>
    </form>
    </div>
        

        
    );
}