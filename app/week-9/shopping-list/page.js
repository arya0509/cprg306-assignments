"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import itemsList from "./item.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page(){
    
    const [items,setItems] = useState([...itemsList]);
    const[selectedItem,setSelectedItem] = useState(null);
    const { user} = useUserAuth();
    const HandleAddItem=(item)=>{
        setItems([...items,item]);
    }
    const HandleItemSelect=(item)=>{
        const newItem=item.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').replace(/,.*/, "").replace(/[0-9]/g, "");;
       
        setSelectedItem(newItem);
        console.log(newItem);

    }
    const HandleIngredientSelect=(item)=>{

    }
    return(
        <main className="w-full  h-full bg-slate-950">
            {user ? (
                <div>
                    <h1 className="text-3xl text-white font-bold flex ">Shopping List</h1>
                    <div className="flex flex-row w-full">
                        <div className="">
                            <NewItem OnAddItems={HandleAddItem}></NewItem>
                            <ItemList items={items} onItemSelect={HandleItemSelect} ></ItemList>
                        </div>
                        <div className="ml-4 mt-6">
                            <MealIdeas ingredient={selectedItem}></MealIdeas>
                        </div>
                    </div>
                </div>
                
            ):(<div>
                <a href="http://localhost:3000/week-9">Sign in to continue</a>
            </div>)}
            
            
            
        </main>
    );
};