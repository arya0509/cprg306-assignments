import { useState, useEffect } from "react";

async function fetchMealIngredients(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0]; // Access the first meal object directly
}

export default function MealIngredients({ mealId }) {
    const [mealDetails, setMealDetails] = useState({});
    const [mealIngredients, setMealIngredients] = useState([]);

    useEffect(() => {
        async function loadMealData() {
            const mealData = await fetchMealIngredients(mealId);
            setMealDetails(mealData);

            // Filter out ingredients
            const ingredients = Object.keys(mealData)
                .filter(key => key.includes("strIngredient") && mealData[key])
                .map(key => mealData[key]);
            setMealIngredients(ingredients);
        }

        loadMealData();
    }, [mealId]);

    return (
        <div>
            <ul>
                {mealIngredients.map((ingredient, index) => (
                    <li key={index} className="h-auto max-w-sm m-2 p-3  hover:bg-orange-600 ">
                        <p className="text-white text-xs">{ingredient}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
