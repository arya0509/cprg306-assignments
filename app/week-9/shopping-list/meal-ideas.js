"use Client";
import { useState,useEffect } from "react";
import MealIngredients from "./meal-ingredients";
async function fetchMealIdeas(ingredient) {
    console.log(ingredient);
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data=await response.json();
    if(data.meals==null){
        return [];
    
    }
    return data.meals;
}

export default function MealIdeas({ingredient}){
    console.log(ingredient);
    const [meals,setMeals] = useState([]);
    const[buttonClickedID,setButtonClickedID]=useState(null);
    const LoadMeanIdeas= async(ingredient)=>{
        if(ingredient!=null){
            const mealIdeas= await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
        else {
            setMeals([]); // Clear the meals if ingredient is null
        }
        
    }
    function LoadMealIngredientsClicked(Id){
        setButtonClickedID(Id);
    }

    
    useEffect(()=>{
        LoadMeanIdeas(ingredient);
    },[ingredient]);
    return (
    <div>
         {ingredient==null? <h1 className="text-3xl text-white font-bold  ">Select an ingredient to see meal ideas</h1>
            :
            <div>
            <h1 className="text-2xl text-white font-bold  ">Meal Ideas</h1>
                {meals.length==0? <h1 className="text-xl text-white   ">No meal ideas found for {ingredient}</h1>:
                    <ul>
                    {meals.map((meal)=>{
                            return(
                                <li className="bg-slate-900 h-auto max-w-sm m-5 p-3 hover:bg-orange-600" key={meal.idMeal} onClick={()=>LoadMealIngredientsClicked(meal.idMeal)}>
                                    <h2 className="">{meal.strMeal}</h2>
                                    {buttonClickedID==meal.idMeal?
                                    <MealIngredients mealId={meal.idMeal}></MealIngredients>:''
                                    }
                                </li>
                            );
                    })}
                    
                    </ul>
                }
            </div>
         }
    </div>
            
        
    );
};