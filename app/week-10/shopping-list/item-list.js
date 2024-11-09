"use client";
import Item from "./item";
import { useState,useEffect } from "react";

export default function ItemList({items,onItemSelect}){
    
    const groupBy=(items,key)=>
        items.reduce((acc,item)=>{
            const category=item[key];

            if(!acc[category]){
                acc[category]=[];
            }

            acc[category].push(item);
            return acc;
        },{});
    const [sortBy,setSortBy] = useState("name");
    
    let itemList=[...items];
    if(sortBy==="name"){
        itemList.sort((a,b)=> a.name.localeCompare(b.name));
    }
    else if(sortBy==="category"){
        itemList.sort((a,b)=> a.category.localeCompare(b.category));
    }
    else{
        itemList= groupBy(itemList,"category");
    }
    return(
        <div className="flex ">
             <ul className="mt-4">
            <div className=" flex flex-row pl-5 items-center ">
                Sort by:
                <button className={`${sortBy==="name"? "bg-orange-400":"bg-orange-600"} w-24 h-12 mx-5`} onClick={()=>setSortBy("name")}>Name</button>
                <button className={`${sortBy==="category"? "bg-orange-400":"bg-orange-600"} w-24 h-12`} onClick={()=>setSortBy("category")}>Category</button>
                <button className={`${sortBy==="groupedCategory"? "bg-orange-400":"bg-orange-600"} w-24 h-12 ml-5`} onClick={()=>setSortBy("groupedCategory")}>Grouped Category</button>

            </div>
            {sortBy==="groupedCategory"?
            
            Object.keys(itemList).sort((a,b)=>a.localeCompare(b)).map((category,index)=>{
                return(
                    <div key={index}  >
                        <h2 className="text-2xl text-white font-bold mt-5 pl-5">{category}</h2>
                        <ul>
                            {itemList[category].map((item,index)=>{
                                return(
                                    <Item  key={index} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} ></Item>
                                );
                            })}
                        </ul>
                    </div>
                );
            }):



            itemList.map((item,index)=>{
                return(
                    <Item  key={index} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}></Item>
                );
            }
            )
            }

            
        </ul>
        </div>
       
    );

}