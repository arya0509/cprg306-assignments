"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsList from "./item.json";
export default function Page(){
    
    const [items,setItems] = useState([...itemsList]);
    const HandleAddItem=(item)=>{
        setItems([...items,item]);
    }
    return(
        <main className="w-full justify-center h-full">
            <h1 className="text-3xl text-white font-bold flex justify-center">Shopping List</h1>
            <NewItem OnAddItems={HandleAddItem}></NewItem>
            <ItemList items={items}></ItemList>
        </main>
    );
};