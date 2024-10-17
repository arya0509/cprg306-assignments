"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsList from "./item.json";
export default function Page(){
    
    const [items,setItems] = useState([...itemsList]);
    return(
        <main className="w-full justify-center h-full">
            <h1 className="text-3xl text-white font-bold flex justify-center">Shopping List</h1>
            <NewItem setItems={setItems}></NewItem>
            <ItemList items={items}></ItemList>
        </main>
    );
};